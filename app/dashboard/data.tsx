"use server"
import { getUserById, getUserNameById, sql } from '@/app/lib/data';

export async function getAllTodo() {
    try {
        const data = await sql`SELECT id, creatorid, workerid, task, status, note, comments, timestamp, fields FROM todo ORDER BY status, timestamp DESC`;
        for (const todo of data) {
            const name = await getUserNameById(todo.creatorid);
            todo.creatorName = name;
            if (todo.workerid) {
                const workerName = await getUserNameById(todo.workerid);
                todo.workerName = workerName;
            }
        }
        return data;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to get todo items.');
    }
}

export async function getTodoById(todoId: string) {
    try {
        const data = await sql`SELECT id, creatorid, workerid, task, status, note, comments, timestamp, fields FROM todo WHERE id = ${todoId}`;
        if (data.length === 0) return null;
        const todo = data[0];
        const name = await getUserNameById(todo.creatorid);
        todo.creatorName = name;
        if (todo.workerid) {
            const workerName = await getUserNameById(todo.workerid);
            todo.workerName = workerName;
        }
        return todo;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to get todo item.');
    }
}

export async function getAllTodoByRole(role: string) {
    try {
        const data = await sql`SELECT id, creatorid, workerid, task, status, note, comments, timestamp, fields FROM todo WHERE ${role} = ANY(fields) ORDER BY status, timestamp DESC`;
        for (const todo of data) {
            const name = await getUserNameById(todo.creatorid);
            todo.creatorName = name;
            if (todo.workerid) {
                const workerName = await getUserNameById(todo.workerid);
                todo.workerName = workerName;
            }
        }
        return data;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to get todo items.');
    }
}

export async function addTodo(creatorid: string, task: string, note:string, fields: string[]) {
    try {
        if (!creatorid || !task || fields.length === 0) return;
        await sql`INSERT INTO todo (timestamp, creatorid, task, note, status, fields) VALUES (${Math.floor(Date.now() / 1000)}, ${creatorid}, ${task}, ${note}, 0, ${fields}::text[])`;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to add todo item.');
    }
}

export async function deleteTodoItem(todoId: string) {
    try {
        await sql`DELETE FROM todo WHERE id = ${todoId}`;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to delete todo item.');
    }
}

export async function updateTodoStatus(todoId: string, status: number) {
    try {
        await sql`UPDATE todo SET status = ${status} WHERE id = ${todoId}`;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to update todo item.');
    }
}

export async function setTodoWorker(todoId: string, workerId: any) {
    try {
        await sql`UPDATE todo SET workerid = ${workerId} WHERE id = ${todoId}`;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to accept todo item.');
    }
}

export async function getCommentsByTodoId(todoId: string) {
    try {
        const data = await sql`SELECT comments FROM todo WHERE id = ${todoId}`;
        let comments = data[0]?.comments || [];
        for (let comment of comments) {
            const user = await getUserById(comment.commentorId);
            comment.commentorName = user.name;
            comment.commentorRole = user.role;
            comment.commentorPfp = user.image;
        }
        return comments;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to get comments.');
    }
}

export async function addCommentToTodo(todoId: string, comment: { commentorId: string, content: string }) {
    try {
        if (!comment.commentorId || !comment.content || !todoId) return;
        const data = await sql`SELECT comments FROM todo WHERE id = ${todoId}`;
        const comments = data[0]?.comments || [];
        comments.push(comment);
        await sql`UPDATE todo SET comments = ${comments} WHERE id = ${todoId}`;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to add comment.');
    }
}