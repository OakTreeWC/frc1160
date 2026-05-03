'use server';
import postgres from 'postgres';
import { revalidatePath } from 'next/cache'; 

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });
export { sql };

export async function getSponsors() {
  try {
    const data = await sql`SELECT * FROM sponsors`;
    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch sponsors.');
  }
}

export async function addSponsors(sponsors: any[]) {
  try {
      for (const sponsor of sponsors) {
        await sql`INSERT INTO sponsors VALUES (${sponsor})`;
      }
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to add sponsor.');
  }
}

export async function removeSponsor(sponsor: string) {
  try {
      await sql`DELETE FROM sponsors WHERE ctid IN (
        SELECT ctid
        FROM sponsors
        WHERE name = ${sponsor}
        LIMIT 1
      )`;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to delete sponsor.');
  }
}

export async function getRealSponsors() {
  try {
    const data = await sql`SELECT * FROM realsponsors`;
    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch sponsors.');
  }
}

export async function createSponsorFR(name: string, image: any) {
  try {
      await sql`INSERT INTO realsponsors (name, image) VALUES (${name}, ${image})`;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to add sponsor.');
  }
}

export async function deleteSponsorFR(name: string) {
  try {
      await sql`DELETE FROM realsponsors WHERE name = ${name}`;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to delete sponsor.');
  }
}

export async function getUser(email: string) {
  try {
    // If using a tagged-template SQL helper that accepts parameters inline:
    const result: any[] = await sql`SELECT * FROM users WHERE email = ${email} LIMIT 1;`;

    if (result[0]) {
        return true
    } else { return false }
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch user.');
  }
}

export async function getUserById(id: string) {
  try {
    // If using a tagged-template SQL helper that accepts parameters inline:
    const result: any[] = await sql`SELECT name, image, role FROM users WHERE id = ${id} LIMIT 1;`;

    if (result[0]) {
        return result[0]
    } else { return false }
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch user.');
  }
}

export async function getUserNameById(id: string) {
  try {
    // If using a tagged-template SQL helper that accepts parameters inline:
    const result: any[] = await sql`SELECT name FROM users WHERE id = ${id} LIMIT 1;`;

    if (result[0]) {
        return result[0].name
    } else { return false }
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch user.');
  }
}

export async function getUsers() {
  try {
    // If using a tagged-template SQL helper that accepts parameters inline:
    const result: any[] = await sql`SELECT * FROM users;`;

    return result
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch user.');
  }
}

export async function removeUser(image: string, name: string, email: string) {
    try {
        await sql`DELETE FROM users WHERE image = ${image} AND name = ${name} AND email = ${email};`;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to remove user.');
    }
}

export async function createInvite(email: string) {
    try {
        await sql`INSERT INTO invites VALUES (${email})`;
        const result: any[] = await sql`SELECT * FROM invites WHERE email = ${email} LIMIT 1;`;
        return result
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch user.');
    }
}

export async function getInvites() {
  try {
    const data = await sql`SELECT * FROM invites`;
    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invites.');
  }
}

export async function checkInvites(email: string) {
    try {
        const result: any[] = await sql`SELECT * FROM invites WHERE email = ${email} LIMIT 1;`;
        if (result[0]) {
            await sql`DELETE FROM invites WHERE email = ${email};`;
            return true
        } else { return false }
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch user.');
    }
}

export async function createEngineering(name: string, position: string, grade: string, years: string, image: any) {
  try {
      await sql`INSERT INTO engineering (name, position, grade, years, image) VALUES (${name}, ${position}, ${grade}, ${years}, ${image})`;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to add sponsor.');
  }
}

export async function getEngineering() {
  try {
    const data = await sql`SELECT * FROM engineering ORDER BY sort`;
    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch sponsors.');
  }
}

export async function editEngineering(sort:string, name: string, position: string, grade: string, years: string) {
    try {
        await sql`UPDATE engineering SET name=${name}, position=${position}, grade=${grade}, years=${years} WHERE sort=${sort}`;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to remove user.');
    }
}

export async function uploadImageEngineering(sort:string, image:any) {
    try {
        await sql`UPDATE engineering SET image=${image} WHERE sort=${sort}`;        
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to upload Image.');
    }
}

export async function removeEngineering(name: string, position: string, grade: string, years: string) {
    try {
        await sql`DELETE FROM engineering WHERE name = ${name} AND position = ${position} AND grade = ${grade} AND years = ${years};`;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to remove user.');
    }
}

export async function createBusiness(name: string, position: string, grade: string, years: string, image: any) {
  try {
      await sql`INSERT INTO business (name, position, grade, years, image) VALUES (${name}, ${position}, ${grade}, ${years}, ${image})`;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to add sponsor.');
  }
}

export async function getBusiness() {
  try {
    const data = await sql`SELECT * FROM business ORDER BY sort`;
    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch sponsors.');
  }
}

export async function editBusiness(sort:string, name: string, position: string, grade: string, years: string) {
    try {
        await sql`UPDATE business SET name=${name}, position=${position}, grade=${grade}, years=${years} WHERE sort=${sort}`;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to remove user.');
    }
}

export async function uploadImageBusiness(sort:string, image:any) {
    try {
        await sql`UPDATE business SET image=${image} WHERE sort=${sort}`;        
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to remove user.');
    }
}

export async function removeBusiness(name: string, position: string, grade: string, years: string) {
    try {
        await sql`DELETE FROM business WHERE name = ${name} AND position = ${position} AND grade = ${grade} AND years = ${years};`;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to remove user.');
    }
}

export async function createMentors(name: string, position: string, desc: string, years: string, specialty: string, occupation: string, image: any) {
  try {
      if (desc) {
          await sql`INSERT INTO mentors (name, position, description, years, specialty, occupation, image) VALUES (${name}, ${position}, ${desc}, ${years}, ${specialty}, ${occupation}, ${image})`;
      } else {
          await sql`INSERT INTO mentors (name, position, years, specialty, occupation, image) VALUES (${name}, ${position}, ${years}, ${specialty}, ${occupation}, ${image})`;
      }
      
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to add sponsor.');
  }
}

export async function getMentors() {
  try {
    const data = await sql`SELECT * FROM mentors ORDER BY sort`;
    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch sponsors.');
  }
}

export async function editMentors(sort:string, name: string, position: string, desc: string, years: string, specialty: string, occupation: string) {
    try {
        if (desc) {
            await sql`UPDATE mentors SET name=${name}, position=${position}, description=${desc}, years=${years}, specialty=${specialty}, occupation=${occupation} WHERE sort=${sort}`;
        } else {
            await sql`UPDATE mentors SET name=${name}, position=${position}, years=${years}, specialty=${specialty}, occupation=${occupation} WHERE sort=${sort}`;
        }
        
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to remove user.');
    }
}

export async function uploadImageMentors(sort:string, image:any) {
    try {
        await sql`UPDATE mentors SET image=${image} WHERE sort=${sort}`;        
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to remove user.');
    }
}

export async function removeMentors(name: string, position: string, desc: string, years: string, specialty: string, occupation: string) {
    try {
        if (desc) {
            await sql`DELETE FROM mentors WHERE name = ${name} AND position = ${position} AND description = ${desc} AND years = ${years} AND specialty = ${specialty} AND occupation = ${occupation};`;
        } else {
            await sql`DELETE FROM mentors WHERE name = ${name} AND position = ${position} AND years = ${years} AND specialty = ${specialty} AND occupation = ${occupation};`;
        }
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to remove user.');
    }
}

export async function getRobots() {
    try {
        const data = await sql`SELECT sort, slug, resources, seasonname, description, photos, competitions, name, published FROM robots ORDER BY sort DESC`;
        return data.filter((robot) => robot.published);
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to get robots.');
    }
}

export async function getAllRobots() {
    try {
        const data = await sql`SELECT sort, slug, resources, seasonname, description, photos, competitions, name, published FROM robots ORDER BY sort DESC`;
        return data;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to get robots.');
    }
}

export async function getRobot(robot: string) {
    try {
        const data = await sql`SELECT sort, slug, resources, seasonname, description, photos, competitions, name, published FROM robots WHERE slug=${robot}`;  
        return data?.[0] ?? null;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to get robots.');
    }
}

export async function addRobot(name: string, thumbnail: string, seasonName: string) {
    try {
        const slug = name.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
        const image = {
            "thumbnail": thumbnail
        };
        await sql`INSERT INTO robots (name, slug, photos, seasonname) VALUES (${name}, ${slug}, ${sql.json(image)}, ${seasonName})`;
        return slug;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to get robots.');
    }
}

export async function updateRobot(slug: string, name: string, desc: string, seasonName: string) {
    try {
        await sql`UPDATE robots SET name=${name}, description=${desc}, seasonname=${seasonName} WHERE slug=${slug}`;   
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to get robots.');
    }
}

export async function uploadThumbnailRobots(slug:string, url:string) {
    try {
        const data = await sql`SELECT photos FROM robots WHERE slug=${slug}`;
        let photos = data[0].photos;
        photos.thumbnail = url;
        await sql`UPDATE robots SET photos=${photos} WHERE slug=${slug}`;       
        await revalidatePath(`/admin/robots/${slug}`);
        await revalidatePath(`/robots/${slug}`);
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to update thumbnail.');
    }
}

export async function addCompetitionRobots(slug:string, key:string) {
    try {
        const data = await sql`SELECT competitions FROM robots WHERE slug=${slug}`;
        let competitions = data[0].competitions || [];
        if (competitions.includes(key)) {
            throw new Error('Competition already exists for this robot.');
        }
        competitions.push(key);
        await sql`UPDATE robots SET competitions=${competitions} WHERE slug=${slug}`;       
        await revalidatePath(`/admin/robots/${slug}`);
        await revalidatePath(`/robots/${slug}`);
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to add competition.');
    }
}

export async function deleteCompetitionRobots(slug:string, key:string) {
    try {
        const data = await sql`SELECT competitions FROM robots WHERE slug=${slug}`;
        let competitions = data[0].competitions;
        if (!competitions.includes(key)) {
            throw new Error('Competition does not exist for this robot.');
        }
        competitions = competitions.filter((comp: string) => comp !== key);
        await sql`UPDATE robots SET competitions=${competitions} WHERE slug=${slug}`;       
        await revalidatePath(`/admin/robots/${slug}`);
        await revalidatePath(`/robots/${slug}`);
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to delete competition.');
    }
}

export async function addResourceRobots(slug: string, url: string, text: string) {
    try {        
        const data = await sql`SELECT resources FROM robots WHERE slug=${slug}`;
        let resources = data[0].resources || {};
        if (Object.values(resources || {}).includes(url)) {
            throw new Error('Resource with this URL already exists for this robot.');
        }
        resources[text] = url;
        await sql`UPDATE robots SET resources=${resources} WHERE slug=${slug}`;       
        await revalidatePath(`/admin/robots/${slug}`);
        await revalidatePath(`/robots/${slug}`);
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to add resource.');
    }
}

export async function deleteResourceRobots(slug: string, url: string) {
    try {
        const data = await sql`SELECT resources FROM robots WHERE slug=${slug}`;
        let resources = data[0].resources;
        delete resources[Object.keys(resources).find(key => resources[key] === url)!];
        await sql`UPDATE robots SET resources=${resources} WHERE slug=${slug}`;       
        await revalidatePath(`/admin/robots/${slug}`);
        await revalidatePath(`/robots/${slug}`);
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to delete resource.');
    }
}

export async function setPublishedRobot(slug: string, published: boolean) {
    try {
        await sql`UPDATE robots SET published=${published} WHERE slug=${slug}`;   
        await revalidatePath(`/admin/robots/${slug}`);
        await revalidatePath(`/robots/${slug}`);
        await revalidatePath(`/robots`);
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to update robot publication status.');
    }
}

export async function updateUser(email: string, name: string, field: string) {
    try {
        await sql`UPDATE users SET name=${name}, role=${field} WHERE email=${email}`;   
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to update user.');
    }
}