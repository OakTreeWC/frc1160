import { getRobot, uploadThumbnailRobots, addCompetitionRobots, deleteCompetitionRobots, addResourceRobots, deleteResourceRobots, updateRobot } from '@/app/lib/data'
import { revalidatePath } from 'next/cache'
import Robot from './robot'

export default async function Page({ params }) {
    const { slug } = await params;
    const robot = await getRobot(slug);

    async function getGoogleDriveId(url) {
        "use server"
        // Check if url is missing or not a string
        if (!url || typeof url !== 'string') {
            console.error("No URL provided to getGoogleDriveId");
            return null;
        }
    
        const regex = /(?:\/d\/|id=)([\w-]+)/;
        const match = url.match(regex);
        return match ? match[1] : null;
    }

    
    async function changeThumbnail(formData) {
        "use server"
        const url = formData.get("photo");
        /*https://drive.google.com/file/d/1lscqznkk0X6T1zcH3jvRUXxu2hCiclX2/view?usp=drive_link*/
        const id = await getGoogleDriveId(url);
        if (!id) return;
        const photo = `https://drive.usercontent.google.com/download?id=${id}&export=view&authuser=0`
        /*https://drive.usercontent.google.com/download?id=1QBvA0QSX9SKtHtM6v9cpEUqIppIhP6zk&export=view&authuser=0*/
        await uploadThumbnailRobots(robot.slug, photo);
    }

    async function addComp(formData) {
        "use server"
        const key = formData.get("compcode");
        try {
            await addCompetitionRobots(robot.slug, key);
        } catch (error) {
            return
        }
    }

    async function deleteComp(formData) {
        "use server"
        const key = formData.get("compcode");
        try {
            await deleteCompetitionRobots(robot.slug, key);
        } catch (error) {
            return
        }
    }

    async function addResource(formData) {
        "use server"
        const url = formData.get("url");
        const text = formData.get("text");
        try {
            await addResourceRobots(robot.slug, url, text);
        } catch (error) {
            return
        }
    }

    async function deleteResource(formData) {
        "use server"
        const url = formData.get("url");
        const text = formData.get("text");
        try {
            await deleteResourceRobots(robot.slug, url, text);
        } catch (error) {
            return
        }
    }

    async function editRobot(slug, name, desc) {
        "use server"
        await updateRobot(slug, name, desc);
        await revalidatePath(`/robots/${slug}`);
        await revalidatePath(`/admin/robots/${slug}`)
    }

    async function fetchCompData(eventKey) {
        "use server"
        try {
            const status = await fetch(`https://www.thebluealliance.com/api/v3/team/frc1160/event/${eventKey}/status`, {
                headers: {
                    "X-TBA-Auth-Key" : process.env.TBA_API
                }
            });
            if (!status.ok) {
              throw new Error(`Response status: ${status.status}`);
            }
            const awards = await fetch(`https://www.thebluealliance.com/api/v3/team/frc1160/event/${eventKey}/awards`, {
                headers: {
                    "X-TBA-Auth-Key" : process.env.TBA_API
                }
            });
            if (!awards.ok) {
              throw new Error(`Response status: ${awards.status}`);
            }
            const event = await fetch(`https://www.thebluealliance.com/api/v3/event/${eventKey}/simple`, {
                headers: {
                    "X-TBA-Auth-Key" : process.env.TBA_API
                }
            });
            if (!event.ok) {
                throw new Error(`Response status: ${event.status}`);
            }
            const eventdata = await event.json();
            const statusdata = await status.json();
            const awardsdata = await awards.json();

            const convertDate = (dateStr) => {
                const [month, day, year] = dateStr.split('-').map(Number);
                
                // JavaScript months are 0-indexed (January is 0)
                const date = new Date(year, month - 1, day);
                
                const getOrdinal = (n) => {
                  const s = ["th", "st", "nd", "rd"];
                  const v = n % 100;
                  return n + (s[(v - 20) % 10] || s[v] || s[0]);
                };
                
                const formattedDate = date.toLocaleDateString('en-US', { month: 'long' }) + 
                                      ' ' + getOrdinal(date.getDate()) + 
                                      ', ' + date.getFullYear();
                return formattedDate;
            }
            const data = {
                name: eventdata.name,
                dates: `${convertDate(eventdata.start_date)} to ${convertDate(eventdata.end_date)}`
            }
            console.log(data);
            return data;
        } catch (error) {
            return
        }
    }

    fetchCompData("2026caven")
    
    return (
        <Robot robot={robot} editRobot={editRobot} changeThumbnail={changeThumbnail} addComp={addComp} deleteComp={deleteComp} addResource={addResource} deleteResource={deleteResource} fetchCompData={fetchCompData} />
    )
}