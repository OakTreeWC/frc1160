"use client"
import clsx from "clsx"
import { useState, useRef } from "react"
import {RemoveScroll} from 'react-remove-scroll'
import Image from 'next/image'
import { updateTodoStatus } from "./data"


export default function ToDoItem({id, deleteTodoItem, removeWorkerTodoItem, acceptTodoItem, dismissTodoItem, updateTodoStatus, getComments, createComment, date, time, task, tasknote, creator, serverstatus, worker, self}) {
    if (!date || !time || !task || !creator) {console.log("Invalid todo item"); return;}
    const [status, setStatusfr] = useState(serverstatus);
    if (status>2) setStatusfr(2);

    async function setStatus(newStatus) {
        if (newStatus<0 || newStatus>2) return;
        if (status===2 && newStatus === 0) {
            await removeWorkerTodoItem(id);
        } else if (status===0 && newStatus === 1) {
            await acceptTodoItem(id);
        }
        setStatusfr(newStatus);
        await updateTodoStatus(id, newStatus);   
    }
    
    const [ comments, setComments ] = useState([]);
    const [ comment, setCommentfr ] = useState(false);
    const [ note, setNote ] = useState(false);

    const reloadSVG = useRef(null);

    function setComment(newValue) {
        setCommentfr(newValue);
        if (newValue) {
            getComments(id).then((comments) => {
                setComments(comments);
            })
        }
    }

    function reloadComments() {
        reloadSVG.current.classList.add("animate-spin");
        getComments(id).then((comments) => {
            setComments(comments);
            reloadSVG.current.classList.remove("animate-spin");
        })
    }

    return (
        <div className={clsx("w-full border-2 my-4 p-5 rounded-2xl", {"bg-red-500/20 border-red-500/30": status===0, "bg-yellow-500/20 border-yellow-500/30": status===1, "bg-green-500/20 border-green-500/30": status===2})} >
            <span className="text-lg grid grid-cols-9 gap-5 items-center">
                <span className="col-span-1 text-left flex flex-col text-base"><span>{date}</span><span>{time}</span></span>
                <span className="col-span-3 text-left">{task}</span>
                <span className="col-span-1">{creator}</span>
                <span className="col-span-2">{worker || ""}</span>
                <span className="flex flex-row gap-3 col-span-2 justify-self-center">
                    <button onClick={() => setComment(true)} className="col-span-1 justify-self-center fill-white" title="View Comments"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-8 w-8 p-2 bg-blue-500/25 hover:cursor-pointer transition hover:bg-blue-500/90 duration-300 ease-out rounded-xl">{/*!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.-->*/}<path d="M203.7 512.9s0 0 0 0l-37.8 26.7c-7.3 5.2-16.9 5.8-24.9 1.7S128 529 128 520l0-72-32 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l320 0c53 0 96 43 96 96l0 224c0 53-43 96-96 96l-120.4 0-91.9 64.9zm64.3-104.1c8.1-5.7 17.8-8.8 27.7-8.8L416 400c26.5 0 48-21.5 48-48l0-224c0-26.5-21.5-48-48-48L96 80c-26.5 0-48 21.5-48 48l0 224c0 26.5 21.5 48 48 48l56 0c10.4 0 19.3 6.6 22.6 15.9 .9 2.5 1.4 5.2 1.4 8.1l0 49.7c32.7-23.1 63.3-44.7 91.9-64.9z"/></svg></button>
                    <button onClick={() => setNote(true)} className="col-span-1 justify-self-center fill-white" title="View Notes"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-8 w-8 p-2 bg-blue-500/25 hover:cursor-pointer transition hover:bg-blue-500/90 duration-300 ease-out rounded-xl">{/*<!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.-->*/}<path d="M240 432L64 432c-8.8 0-16-7.2-16-16L48 96c0-8.8 7.2-16 16-16l320 0c8.8 0 16 7.2 16 16l0 176-88 0c-39.8 0-72 32.2-72 72l0 88zM380.1 320L288 412.1 288 344c0-13.3 10.7-24 24-24l68.1 0zM0 416c0 35.3 28.7 64 64 64l197.5 0c17 0 33.3-6.7 45.3-18.7L429.3 338.7c12-12 18.7-28.3 18.7-45.3L448 96c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416z"/></svg></button>
                    <button onClick={() => setStatus(0)} className={clsx("col-span-1 justify-self-center fill-white", {"hidden": status!==2})} title="Mark As In-Complete"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="h-8 w-8 p-2 bg-red-500/25 hover:cursor-pointer transition hover:bg-red-500/90 duration-300 ease-out rounded-xl">{/*<!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.-->*/}<path d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg></button>
                    <button onClick={() => { if (status === 0) setStatus(1); else if (status === 1) setStatus(2); else dismissTodoItem(id); }} className="col-span-1 justify-self-center fill-white" title={clsx({"Accept": status===0, "Mark As Complete": status===1, "Dismiss": status===2})}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-8 w-8 p-2 bg-green-500/25 hover:cursor-pointer transition hover:bg-green-500/90 duration-300 ease-out rounded-xl">{/*!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.-->*/}<path d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg></button>
                    {(deleteTodoItem && status!==2) && (
                        <form action={deleteTodoItem} className="col-span-1 flex justify-center items-center">
                            <input type="hidden" name="todoId" value={id}/>
                            <button type="submit" className="col-span-1 justify-self-center fill-white" title="Delete To-Do"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-8 w-8 p-2 bg-red-500/25 hover:cursor-pointer transition hover:bg-red-500/90 duration-300 ease-out rounded-xl">{/*<!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.-->*/}<path d="M136.7 5.9C141.1-7.2 153.3-16 167.1-16l113.9 0c13.8 0 26 8.8 30.4 21.9L320 32 416 32c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 8.7-26.1zM32 144l384 0 0 304c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-304zm88 64c-13.3 0-24 10.7-24 24l0 192c0 13.3 10.7 24 24 24s24-10.7 24-24l0-192c0-13.3-10.7-24-24-24zm104 0c-13.3 0-24 10.7-24 24l0 192c0 13.3 10.7 24 24 24s24-10.7 24-24l0-192c0-13.3-10.7-24-24-24zm104 0c-13.3 0-24 10.7-24 24l0 192c0 13.3 10.7 24 24 24s24-10.7 24-24l0-192c0-13.3-10.7-24-24-24z"/></svg></button>
                        </form>
                    )}
                </span>
            </span>
            {comment && (
                <RemoveScroll>
                    <div className="fixed flex justify-center bg-black/35 items-center top-0 left-0 w-full h-screen">
                        <div className="bg-white md:w-200 m-10 p-7 text-black rounded-2xl flex flex-col justify-center items-center space-y-7 text-center">
                            <span className="flex flex-row justify-between items-center w-full">
                                <button className="p-2.5 bg-blue-500/30 hover:bg-blue-500/90 transition duration-300 ease-out rounded-xl hover:fill-white hover:cursor-pointer" title="Reload Messages" onClick={() => reloadComments()}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" ref={reloadSVG} className="w-5 h-5">{/*<!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.-->*/}<path d="M436.7 74.7L448 85.4 448 32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l47.9 0-7.6-7.2c-.2-.2-.4-.4-.6-.6-75-75-196.5-75-271.5 0s-75 196.5 0 271.5 196.5 75 271.5 0c8.2-8.2 15.5-16.9 21.9-26.1 10.1-14.5 30.1-18 44.6-7.9s18 30.1 7.9 44.6c-8.5 12.2-18.2 23.8-29.1 34.7-100 100-262.1 100-362 0S-25 175 75 75c99.9-99.9 261.7-100 361.7-.3z"/></svg>
                                </button>
                                <button onClick={() => setComment(false)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="h-10 w-10 p-2 hover:cursor-pointer hover:fill-white transition hover:bg-blue-500/40 duration-300 ease-out rounded-xl">{/*<!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.-->*/}<path d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>
                                </button>
                            </span>
                            <div className="flex flex-col w-full justify-center text-center space-y-7">
                                <div className="flex flex-col justify-start items-start space-y-5 bg-gray-300 rounded-lg px-5 py-10 text-left max-h-167 overflow-y-auto w-full">
                                    {
                                        comments.map((comment) => (
                                            <div className="w-full flex flex-row gap-5">
                                                <Image src={comment.commentorPfp} width={96} height={96} alt={comment.commentorName} className="rounded-full h-12 w-12" />
                                                <div className="flex flex-col grow gap-3">
                                                    <div className="flex flex-col justify-start items-start">
                                                        <span className="font-medium text-xl/7">{comment.commentorName}</span>
                                                        <span className="font-normal text-sm p-1 px-2 rounded-md text-gray-600 bg-gray-400/50">{comment.commentorRole.charAt(0).toUpperCase() + comment.commentorRole.slice(1)}</span>
                                                    </div>
                                                    <span className="text-md">{comment.content}</span>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                                <form action={(formData) => {createComment(formData); setComments([...comments, { commentorName: self.name, commentorPfp: self.image, commentorRole: self.role, content: formData.get('comment') }]); reloadComments();}} className="flex flex-row gap-5">
                                    <input type="hidden" name="todoId" value={id}/>
                                    <input placeholder="Comment" name="comment" className="border-2 border-gray-400 p-2 rounded-lg grow"/>
                                    <button
                                        type="submit"
                                        className="border-2 flex flex-row justify-center items-center border-white rounded-lg px-4 py-2 transition bg-blue-500 duration-250 hover:bg-blue-600 fill-white text-white hover:cursor-pointer"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="h-5 w-5 pr-1">{/*<!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.-->*/}<path d="M536.4-26.3c9.8-3.5 20.6-1 28 6.3s9.8 18.2 6.3 28l-178 496.9c-5 13.9-18.1 23.1-32.8 23.1-14.2 0-27-8.6-32.3-21.7l-64.2-158c-4.5-11-2.5-23.6 5.2-32.6l94.5-112.4c5.1-6.1 4.7-15-.9-20.6s-14.6-6-20.6-.9L229.2 276.1c-9.1 7.6-21.6 9.6-32.6 5.2L38.1 216.8c-13.1-5.3-21.7-18.1-21.7-32.3 0-14.7 9.2-27.8 23.1-32.8l496.9-178z"/></svg>
                                        Send
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </RemoveScroll>
            )}   
            {note && (
                <RemoveScroll>
                    <div className="fixed flex justify-center bg-black/35 items-center top-0 left-0 w-full h-screen">
                        <div className="bg-white md:w-200 m-10 p-7 text-black rounded-2xl flex flex-col justify-center items-center space-y-7 text-center">
                            <span className="flex flex-row justify-end items-center w-full">
                                <button onClick={() => setNote(false)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="h-10 w-10 p-2 hover:cursor-pointer hover:fill-white transition hover:bg-blue-500/40 duration-300 ease-out rounded-xl">{/*<!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.-->*/}<path d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>
                                </button>
                            </span>
                            <div className="flex flex-col w-full justify-center text-center space-y-7">
                                <div className="flex flex-col justify-start items-start space-y-5 bg-gray-300 rounded-lg px-5 py-10 text-left h-full">
                                    {tasknote.split("\n").map((line, index) => (
                                        <span key={index} className="text-md">{line}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </RemoveScroll>
            )}   
        </div>
    )
}