"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

export default function UpdateUserForm({ action, defaultName, defaultRole }) {
    const router = useRouter();
    const [pending, startTransition] = useTransition();
    const [role, setRole] = useState(defaultRole);
    return (
        <form
        action={(formData) => {
            startTransition(async () => {
            await action(formData);
            router.refresh();
            });
        }}
        className="grid grid-cols-2 gap-5 justify-center items-center"
        >
            <label htmlFor="name" className="text-lg">Name</label>
            <input type="text" name="name" defaultValue={defaultName} className="w-full bg-gray-500/20 border-gray-500/30 border-2 p-3 rounded-2xl text-center" />
            <label htmlFor="field" className="text-lg">Field</label>
            <select name="field" value={role || ""} onChange={(e) => setRole(e.target.value)} className="w-full bg-gray-500/20 border-gray-500/30 border-2 p-3 rounded-2xl text-center" >
                <option value="mechanical" className="bg-gray-600">Mechanical</option>
                <option value="electrical" className="bg-gray-600">Electrical</option>
                <option value="cad" className="bg-gray-600">CAD</option>
                <option value="programming" className="bg-gray-600">Programming</option>
                <option value="engineering" className="bg-gray-600">Engineering</option>
                <option value="business" className="bg-gray-600">Business</option>
            </select>
            <button
                type="submit"
                className="col-span-2 rounded-lg px-4 py-2 transition bg-blue-500 duration-500 hover:bg-blue-600 hover:cursor-pointer"
            >
                Update
            </button>
        </form>
    );
}