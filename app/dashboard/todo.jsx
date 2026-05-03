"use client"
import ToDoItem from "@/app/dashboard/todoitem";
import { useState, useRef } from 'react';
import {RemoveScroll} from 'react-remove-scroll'


export default function ToDo({userId, createTodo, deleteTodo, acceptTodo, removeWorkerTodo, dismissTodo, updateTodoStatus, todos, self, getAllTodo, getComments, createComment}) {
    const [ todo, setTodo ] = useState(false);
    const [ clienttodos, setClientTodos ] = useState(todos);
    const reloadSVG = useRef(null);
    async function updateClientTodos() {
        reloadSVG.current?.classList.add("animate-spin");
        const todos = await getAllTodo();
        setClientTodos([]);
        await new Promise(resolve => setTimeout(resolve, 0.5))
        await setClientTodos(todos);
        reloadSVG.current?.classList.remove("animate-spin");
    }

    const acceptTodoItems = async (todoId) => {
        await acceptTodo(todoId);
        await updateClientTodos();
    }

    const removeWorkerTodoItems = async (todoId) => {
        await removeWorkerTodo(todoId);
        await updateClientTodos();
    }

    async function createTodoItem(formData) {
        await createTodo(formData);
        const todos = await getAllTodo();
        setClientTodos(todos);
        setTodo(false);
    }

    async function deleteTodoItem(formData) {
        console.log(formData);
        const todoId = formData.get("todoId");
        console.log(todoId);
        if (!todoId) return;
        await deleteTodo(todoId);
        const todos = await getAllTodo();
        setClientTodos(todos);
    }

    async function dismissTodoItem(todoId) {
        console.log(todoId);
        if (!todoId) return;
        await dismissTodo(todoId);
        const todos = await getAllTodo();
        setClientTodos(todos);
    }

    return (
    <>
        <div className="col-span-3 bg-purple-500/10 rounded-2xl border-purple-500/20 border-2 w-full h-full min-h-80 max-h-[75vh] overflow-y-auto text-white text-center p-6" >
            <div className="flex flex-row items-center justify-between w-full">
                <button className="p-2.5 bg-blue-500/25 hover:bg-blue-500/90 transition duration-300 ease-out rounded-xl hover:cursor-pointer" title="Reload To-Do List" onClick={() => updateClientTodos()}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" ref={reloadSVG} className="w-5 h-5 fill-white">{/*<!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.-->*/}<path d="M436.7 74.7L448 85.4 448 32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l47.9 0-7.6-7.2c-.2-.2-.4-.4-.6-.6-75-75-196.5-75-271.5 0s-75 196.5 0 271.5 196.5 75 271.5 0c8.2-8.2 15.5-16.9 21.9-26.1 10.1-14.5 30.1-18 44.6-7.9s18 30.1 7.9 44.6c-8.5 12.2-18.2 23.8-29.1 34.7-100 100-262.1 100-362 0S-25 175 75 75c99.9-99.9 261.7-100 361.7-.3z"/></svg></button>
                <span className="font-bold text-3xl">To-Do</span>
                <button className="p-2.5 bg-blue-500/25 hover:bg-blue-500/90 transition duration-300 ease-out rounded-xl hover:cursor-pointer" title="Add To-Do Item" onClick={() => setTodo(true)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-5 fill-white">{/*<!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.-->*/}<path d="M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-160z"/></svg></button>
                </div>
            <div className="w-full bg-gray-500/20 border-gray-500/30 border-2 my-4 px-5 py-3 rounded-2xl" >
                <span className="text-lg grid grid-cols-9 gap-5 items-center">
                    <span className="col-span-1 text-left">Date/Time</span>
                    <span className="col-span-3 text-left">Task</span>
                    <span className="col-span-1">Created By</span>
                    <span className="col-span-2">In Progress/Completed By</span>
                    <span className="col-span-2">Actions</span>
                </span>   
            </div>
            {
                clienttodos.sort((a, b) => a.status - b.status).map((todo) => {
                    return (
                        <ToDoItem 
                        key={todo.id} 
                        id={todo.id}
                        deleteTodoItem={userId===todo.creatorid ? deleteTodoItem : null}
                        dismissTodoItem={dismissTodoItem}
                        updateTodoStatus={updateTodoStatus}
                        date={
                            new Date(todo.timestamp * 1000).toLocaleDateString(
                                undefined, 
                                { 
                                    month: '2-digit', 
                                    day: '2-digit', 
                                    year: 'numeric' 
                                }
                            )
                        } 
                        time={
                            new Date(todo.timestamp * 1000).toLocaleTimeString(
                                undefined, 
                                { 
                                    hour: '2-digit', 
                                    minute: '2-digit',
                                }
                            )
                        } 
                        task={todo.task} 
                        tasknote={todo.note} 
                        creator={todo.creatorName} 
                        serverstatus={todo.status} 
                        worker={todo.workerName || ""} 
                        acceptTodoItem={acceptTodoItems}
                        removeWorkerTodoItem={removeWorkerTodoItems}
                        getComments={getComments}
                        createComment={createComment}
                        self={self}
                        />
                    )
                })
            }
        </div>
        {
            todo && (
                <RemoveScroll>
                <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center" onClick={() => setTodo(false)}>
                    <div className="bg-gray-900 p-10 rounded-2xl border-gray-500/30 border-2 w-full max-w-md text-white" onClick={(e) => e.stopPropagation()}>
                        <span className="text-2xl font-bold mb-5 block text-center">Add To-Do Item</span>
                        <form action={createTodoItem} className="flex flex-col placeholder:text-gray-400 gap-5">
                            <input type="text" name="task" placeholder="Task Name*" className="w-full bg-gray-500/20 border-gray-500/30 border-2 p-3 rounded-2xl text-center" required autoFocus />
                            <textarea name="note" placeholder="Notes (i.e. what files to cnc)" className="w-full bg-gray-500/20 border-gray-500/30 border-2 p-3 rounded-2xl text-center" />
                            <label htmlFor="field" className="flex flex-row gap-2 justify-center items-center">
                                <span className="text-xl">Field*</span>
                            </label>
                            {
                                ["mechanical", "electrical", "cad", "programming", "engineering", "business"].map((field) => (
                                    <span key={field} className="flex flex-row justify-between px-8">
                                        <label htmlFor={field} className="flex items-center gap-2 justify-start">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                                        <input type="checkbox" name={field} value={field} id={field}></input>
                                    </span>
                                )
                                )  
                            }
                            <button type="submit" className="p-3 bg-blue-500/25 hover:bg-blue-500/90 transition duration-300 ease-out rounded-xl text-white font-bold">Add Task</button>
                        </form>
                    </div>
                </div>
                </RemoveScroll>
            )
        }
    </>
    )
}