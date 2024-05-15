"use client"
import { useState } from "react";
import { createClient } from "@supabase/supabase-js"; 

export default function ResetPassword() {


    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const supabase = createClient('https://qyyoebsjxzkhtusqwqdc.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF5eW9lYnNqeHpraHR1c3F3cWRjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU1NDI1MjQsImV4cCI6MjAzMTExODUyNH0.pZmSQVPAH8vvELkFY4GDlHm2hc5FLChBmWtRQ17WHW0')

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if(password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }   

        await supabase.auth.updateUser({ password: password })
    }

    return (
        <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md gap-2">
            <form className="animate-in flex-1 flex flex-col w-full gap-2 text-foreground pt-24">
                <label className="text-md" htmlFor="email">New Password</label>
                <input
                    className="rounded-md px-4 py-2 bg-inherit border mb-6" 
                    type="password"
                    name="password"
                    placeholder="••••••••"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label className="text-md" htmlFor="password">Confirm Password</label>
                <input
                className="rounded-md px-4 py-2 bg-inherit border mb-6"
                type="password"
                name="confirmPassword"
                placeholder="••••••••"
                required
                onChange={(e) => setConfirmPassword(e.target.value)}
                />  

                <button 
                    className="w-full border rounded p-2"
                    onClick={() => handleSubmit}
                    >Submit
                </button>

            </form>
        </div>
    );
}
