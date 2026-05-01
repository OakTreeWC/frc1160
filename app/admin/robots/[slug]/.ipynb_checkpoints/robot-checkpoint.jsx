'use client'
import { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {RemoveScroll} from 'react-remove-scroll';

export default function Robot({ robot, editRobot, changeThumbnail, addComp, deleteComp, addResource, deleteResource, fetchCompData }) {
    const nameRef = useRef(null);
    const descRef = useRef(null);

    const [ photo, setPhoto ] = useState(false);
    const [ comp, setComp ] = useState(false);
    const [ resources, setResources ] = useState(false);
    
    function submitEdits() {
        const name = nameRef.current?.innerText;
        const desc = descRef.current?.innerText;
        robot.name=name;
        robot.description=desc;
        editRobot(robot.slug,name,desc);
    }

    function changeThumb(formData) {
        setPhoto(false);
        changeThumbnail(formData);
    }
    
    return (
        <div className="relative text-black w-full flex flex-col text-center opacity-100 bg-white">
            <div className="w-full px-10 py-5 flex flex-row justify-center space-x-10 items-center" >
                    <button onClick={() => submitEdits()} className="bg-indigo-500 p-5 py-2 rounded-xl text-white font-normal hover:cursor-pointer hover:bg-indigo-600 transition ease-in-out" >Save</button>
                    <button className="bg-indigo-500 p-5 py-2 rounded-xl text-white font-normal hover:cursor-pointer hover:bg-indigo-600 transition ease-in-out" >Publish</button>
                </div>
            <div className="pb-19 px-10 md:px-45 w-full">
                <div className="flex flex-row justify-center flex-wrap">
                    <div className="flex flex-col items-center space-y-10 px-8 text-center">
                        <span ref={nameRef} contentEditable suppressContentEditableWarning className="text-6xl font-light text-center flex flex-col space-y-1">{robot.name}</span>
                        <span className="flex flex-row space-x-5 items-center justify-center">
                            <span className="w-10" />
                            <Image src={robot.photos.thumbnail} width={800} height={600} alt={robot.name} />
                            <button onClick={() => setPhoto(true)}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-10 w-10 p-2 hover:cursor-pointer hover:fill-white transition hover:bg-blue-500/40 duration-300 ease-out rounded-xl">{/* Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc. */}<path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L368 46.1 465.9 144 490.3 119.6c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L432 177.9 334.1 80 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"/></svg>
                            </button>
                        </span>
                        <span ref={descRef} contentEditable suppressContentEditableWarning className="text-xl text-center font-light w-[67%]">{robot.description}</span>
                    </div>
                </div>
            </div>
            <hr className="border-2 border-gray-400 mx-25 rounded-xl" />
            <div className="py-19 px-10 md:px-45 w-full">
                <div className="flex flex-row justify-center flex-wrap">
                    <div className="flex flex-col items-center space-y-5 px-8">
                        <span className="flex flex-row space-x-5 items-center justify-center">
                            <span className="w-10" />
                            <span className="text-6xl font-light flex flex-col space-y-1">
                                Competitions
                            </span>
                            <button onClick={() => setComp(true)} >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-10 w-10 p-2 hover:cursor-pointer hover:fill-white transition hover:bg-blue-500/40 duration-300 ease-out rounded-xl">{/* Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc. */}<path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L368 46.1 465.9 144 490.3 119.6c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L432 177.9 334.1 80 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"/></svg>
                            </button>
                        </span>
                        <span className="flex flex-col justify-center text-center space-y-7">
                            <span className="text-xl font-light flex flex-col justify-center text-center space-y-1">
                                <span className="text-3xl font-medium">CA District Ventura County Event</span>
                                <span className="text-2xl font-medium pb-1">March 13 to March 15, 2026</span>
                                <span>Team 1160 was Rank 10 with a record of 8-7-0</span>
                                <span className="text-2xl font-normal">Awards</span>
                                <span>Imagery Award in honor of Jack Kamen</span>
                            </span>
                            <span className="text-xl font-light flex flex-col justify-center text-center space-y-1">
                                <span className="text-3xl font-medium">CA District San Gabriel Valley Event</span>
                                <span className="text-2xl font-medium pb-1">March 27 to March 29, 2026</span>
                                <span>Team 1160 was Rank 6 with a record of 10-6-0</span>
                                <span className="text-2xl font-normal">Awards</span>
                                <span>Creativity Award sponsored by Rockwell Automation</span>
                            </span>
                            <span className="text-2xl font-light flex flex-col justify-center text-center space-y-1">
                                <span className="text-3xl font-medium">FIRST California Southern State Championship</span>
                                <span className="text-2xl font-medium pb-1">April 9 to April 12, 2026</span>
                                <span>Team 1160 was Rank 41 with a record of 5-7-0</span>
                                <span className="text-2xl font-normal">Awards</span>
                                <span>Team Sustainability Award sponsored by Dow</span>
                            </span>
                        </span>
                    </div>
                </div>
            </div>
            <hr className="border-2 border-gray-400 mx-25 rounded-xl" />
            <div className="py-19 px-10 md:px-45 md:width-[50%]">
                <div className="flex flex-row justify-center flex-wrap">
                    <div className="flex flex-col items-center space-y-5 px-8">
                        <span className="flex flex-row space-x-5 items-center justify-center">
                            <span className="w-10" />
                            <span className="text-6xl font-light flex flex-col space-y-1">
                                Resources
                            </span>
                            <button onClick={() => setResources(true)}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-10 w-10 p-2 hover:cursor-pointer hover:fill-white transition hover:bg-blue-500/40 duration-300 ease-out rounded-xl">{/* Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc. */}<path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L368 46.1 465.9 144 490.3 119.6c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L432 177.9 334.1 80 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"/></svg>
                            </button>
                        </span>
                        {Object.entries(robot.resources).map(([key, value]) => (
                            <div key={value} className="flex justify-center opacity-100">
                                <Link href={value} className="p-3 border-5 border-blue-500 transition-colors ease-in-out duration-300 font-bold text-2xl text-blue-500 hover:border-blue-400 hover:text-blue-400">{key}</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            { photo && (
                <div className="fixed flex justify-center bg-black/35 items-center top-0 left-0 w-full h-screen">
                    <div className="bg-white w-full m-10 p-7 text-black rounded-2xl flex flex-col justify-center items-center text-center">
                        <span className="flex flex-row justify-end items-center w-full">
                            <button onClick={() => setPhoto(false)}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="h-10 w-10 p-2 hover:cursor-pointer hover:fill-white transition hover:bg-blue-500/40 duration-300 ease-out rounded-xl">{/*!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc. */}<path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>
                            </button>
                        </span>
                        <form action={changeThumb} className="flex flex-row space-x-5 justify-center items-center">
                           <label htmlFor="photo">Must be a Google Drive URL (Image must be set to public)</label>
                           <input
                                placeholder="URL"
                                name="photo"
                                className="border-2 border-gray-400 p-2 rounded-lg"
                                type="url"
                                pattern="(https://drive.google.com/file/d/).*"
                                size={40}
                                required
                                autoFocus
                              />
                            <button
                                type="submit"
                                className="border-2 border-white rounded-lg px-4 py-2 transition bg-gray-200 duration-500 hover:bg-gray-300 hover:cursor-pointer"
                              >
                                Update
                              </button>
                        </form>
                    </div>
                </div>
            )}
            { comp && (
            <RemoveScroll>
                <div className="fixed flex justify-center bg-black/35 items-center top-0 left-0 w-full h-screen">
                    <div className="bg-white m-10 md:w-[50%] p-7 text-black rounded-2xl flex flex-col justify-center items-center space-y-5 text-center">
                        <span className="flex flex-row justify-end items-center w-full">
                            <button onClick={() => setComp(false)}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="h-10 w-10 p-2 hover:cursor-pointer hover:fill-white transition hover:bg-blue-500/40 duration-300 ease-out rounded-xl">{/*!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc. */}<path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>
                            </button>
                        </span>
                        <form action={addComp} className="flex flex-row space-x-5 text-3xl font-medium justify-center items-center">
                            <input
                                placeholder="Competition Key"
                                name="compcode"
                                className="border-2 border-gray-400 p-2 rounded-lg"
                                type="text"
                                pattern="[0-9]{4}[a-zA-Z]{3,}"
                                required
                                autoFocus
                            />
                            <button
                                type="submit"
                                className="border-2 border-white rounded-lg px-4 py-2 transition bg-gray-200 duration-500 hover:bg-gray-300 hover:cursor-pointer"
                            >
                                Add
                            </button>
                        </form>
                        <div className="flex flex-col w-full justify-center text-center space-y-7">
                            {robot.competitions.map((comp) => (
                                <div key={comp} className="flex flex-row justify-between text-left rounded-2xl w-full p-5 bg-gray-200">
                                    <span className="text-3xl font-medium">{comp}</span>
                                    <form action={deleteComp}>
                                        <input type="hidden" name="compcode" value={comp} />
                                        <button type="submit">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"
                                                className="h-8 w-8 p-2 hover:cursor-pointer hover:fill-white transition hover:bg-red-500/50 duration-300 ease-out rounded-xl"
                                            >
                                                <path d="M136.7 5.9L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-32-32-32-32l-96 0-8.7-26.1C306.9-7.2 294.7-16 280.9-16L167.1-16c-13.8 0-26 8.8-30.4 21.9zM416 144L32 144 53.1 467.1C54.7 492.4 75.7 512 101 512L347 512c25.3 0 46.3-19.6 47.9-44.9L416 144z"/>
                                            </svg>
                                        </button>
                                    </form>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </RemoveScroll>
            )}
            { resources && (
            <RemoveScroll>
                <div className="fixed flex justify-center bg-black/35 items-center top-0 left-0 w-full h-screen">
                    <div className="bg-white md:w-200 m-10 p-7 text-black rounded-2xl flex flex-col justify-center items-center space-y-7 text-center">
                        <span className="flex flex-row justify-end items-center w-full">
                            <button onClick={() => setResources(false)}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="h-10 w-10 p-2 hover:cursor-pointer hover:fill-white transition hover:bg-blue-500/40 duration-300 ease-out rounded-xl">{/*!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc. */}<path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>
                            </button>
                        </span>
                        <form action={addResource} className="flex flex-row space-x-5 text-3xl font-medium justify-center items-center">
                            <input
                                placeholder="Text"
                                name="text"
                                className="border-2 border-gray-400 p-2 rounded-lg"
                                type="text"
                                size={15}
                                required
                                autoFocus
                            />
                            <input
                                placeholder="URL"
                                name="url"
                                className="border-2 border-gray-400 p-2 rounded-lg"
                                type="text"
                                size={15}
                                required
                            />
                            <button
                                type="submit"
                                className="border-2 border-white rounded-lg px-4 py-2 transition bg-gray-200 duration-500 hover:bg-gray-300 hover:cursor-pointer"
                            >
                                Add
                            </button>
                        </form>
                        <div className="flex flex-col w-full justify-center text-center space-y-7">
                            {Object.entries(robot.resources).map(([key, value]) => (
                                <div key={value} className="grid grid-cols-4 space-x-5 justify-between text-left rounded-2xl w-full p-5 bg-gray-200">
                                    <span className="text-3xl font-medium col-span-1">{key}</span>
                                    <span className="text-3xl font-medium col-span-2">{value}</span>
                                    <form action={deleteResource} className="col-span-1 flex justify-end">
                                        <input type="hidden" name="url" value={value} />
                                        <input type="hidden" name="text" value={key} />
                                        <button type="submit">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"
                                                className="h-8 w-8 p-2 hover:cursor-pointer hover:fill-white transition hover:bg-red-500/50 duration-300 ease-out rounded-xl"
                                            >
                                                <path d="M136.7 5.9L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-32-32-32-32l-96 0-8.7-26.1C306.9-7.2 294.7-16 280.9-16L167.1-16c-13.8 0-26 8.8-30.4 21.9zM416 144L32 144 53.1 467.1C54.7 492.4 75.7 512 101 512L347 512c25.3 0 46.3-19.6 47.9-44.9L416 144z"/>
                                            </svg>
                                        </button>
                                    </form>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </RemoveScroll>
            )}
        </div>
    )
}