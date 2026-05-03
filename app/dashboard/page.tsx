import { auth } from "@/auth";
import Link from 'next/link';
import { getUserNameById, updateUser } from "@/app/lib/data";
import UpdateUserForm from "./updateUserForm";
import ToDo from "./todo";
import { addTodo, getAllTodoByRole, deleteTodoItem, getTodoById, updateTodoStatus, setTodoWorker, addCommentToTodo, getCommentsByTodoId} from "./data";

export default async function Page() {
    const session = await auth()
    const todos = await getAllTodoByRole(session?.user?.role || "");

    async function changeUser(formData: FormData) {
        "use server";

        const name = formData.get("name") as string;
        const field = formData.get("field") as string;

        if (!name || !field) return;
        const allowedFields = ["mechanical", "electrical", "cad", "programming", "engineering", "business"];
        if (!allowedFields.includes(field)) return; 


        await updateUser(session?.user?.email || "", name, field);
    }

    async function createTodo(formData: FormData) {
        "use server";
        const task = formData.get("task") as string;
        const note = formData.get("note") as string;
        const fields = ["mechanical", "electrical", "cad", "programming", "engineering", "business"].filter((field) => formData.get(field) === field);
        if (!task) return;
        await addTodo(session?.user?.id || "", task, note, fields);
        return
    }

    async function deleteTodo(todoId: string) {
        "use server";
        const todo = await getTodoById(todoId);
        if (!todo) return;
        if (todo.creatorid !== session?.user?.id) return;
        await deleteTodoItem(todoId);
    }

    async function dismissTodo(todoId: string) {
        "use server";
        const todo = await getTodoById(todoId);
        if (!todo) return;
        console.log(todo);
        if (todo.status !== 2) return;
        await deleteTodoItem(todoId);
    }

    async function acceptTodo(todoId: string) {
        "use server";
        const todo = await getTodoById(todoId);
        if (!todo) return;
        if (todo.status !== 0) return;
        await setTodoWorker(todoId, session?.user?.id || "");
    }

    async function removeWorkerTodo(todoId: string) {
        "use server";
        const todo = await getTodoById(todoId);
        if (!todo) return;
        if (todo.workerid !== session?.user?.id) return;
        await setTodoWorker(todoId, null);
    }

    async function getComments(todoId: string) {
        "use server";
        let comments = await getCommentsByTodoId(todoId);
        if (!comments) return [];
        return comments;
    }

    async function createComment(formData: FormData) {
        "use server";
        const todoId = formData.get("todoId") as string;
        const comment = formData.get("comment") as string;
        if (!todoId || !comment) return;
        await addCommentToTodo(todoId, { commentorId: session?.user?.id || "", content: comment });
    }

    async function getAllTodo() {
        "use server";
        const todos = await getAllTodoByRole(session?.user?.role || "");
        return todos;
    }

    return (
        <div className="bg-gray-900 w-full min-h-screen flex flex-col md:grid grid-cols-4 items-start place-content-start justify-items-center p-10 gap-10">
            <div hidden className="col-span-4 bg-purple-500/10 rounded-2xl border-purple-500/20 border-2 w-full min-h-80 text-white text-center p-6" >
                <span className="font-bold text-3xl">Announcements</span>
                <div className="w-full bg-green-500/20 border-green-500/30 border-2 my-4 p-5 rounded-2xl" >
                    <p className="text-lg">announcement</p>   
                </div>
            </div>
            <div className="col-span-1 flex flex-col space-y-3 items-center bg-purple-500/10 rounded-2xl border-purple-500/20 border-2 w-full min-h-80 text-white text-center p-6" >
                <span className="font-bold text-3xl mb-5">Account</span>
                <UpdateUserForm
                    key={session?.user?.role}
                    action={changeUser}
                    defaultName={session?.user?.name}
                    defaultRole={(session?.user as any)?.role}
                />
            </div>
            <div hidden className="col-span-1 flex flex-col space-y-3 items-center bg-purple-500/10 rounded-2xl border-purple-500/20 border-2 w-full min-h-80 text-white text-center p-6" >
                <span className="font-bold text-3xl mb-5">Resources</span>
                <Link href="/aboutus" className="p-3 border-5 border-blue-500 transition-colors ease-in-out duration-300 font-bold text-3xl text-blue-500 hover:border-blue-400 hover:text-blue-400">About Us</Link>
            </div>
            <ToDo self={session?.user} userId={session?.user?.id} createTodo={createTodo} todos={todos} getAllTodo={getAllTodo} deleteTodo={deleteTodo} acceptTodo={acceptTodo} removeWorkerTodo={removeWorkerTodo} dismissTodo={dismissTodo} updateTodoStatus={updateTodoStatus} getComments={getComments} createComment={createComment} />
        </div>
    ); 
}