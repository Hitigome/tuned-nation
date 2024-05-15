import { createClient } from "@/utils/supabase/server";
import { NextPage } from "next";
import { redirect } from "next/navigation";


export default async function CreateEvent(){
    
    const createEvent = async (event: React.FormEvent<HTMLFormElement>) => {
        "use server"
        const supabase = createClient();
    
        const formData = new FormData();
        const { error } = await supabase.from("Event").insert([
            {
                name: formData.get("name"),
                host: formData.get("host"),
                description: formData.get("description"),
                date: formData.get("date"),
                start_time: formData.get("start_time"),
                end_time: formData.get("end_time"),
                location: formData.get("location"),
                Image: formData.get("image"),
            }
        ]);
    
        if (error) {
            return redirect("/event/create?message=Could not create event");
        }
    
        return redirect("/event/create?message=Event created successfully");
    };
    
    return (
        <div>
            <h1 className="my-5 text-5xl">Create Event</h1>
            <form className="flex flex-col" onSubmit={createEvent}>
                <div>
                    <label className="text-lg mr-2" htmlFor="name">Name</label>
                    <input
                        className="rounded-md px-4 py-2 bg-inherit border mb-6"
                        name="name"
                        placeholder="Event Name"
                        required
                    />
                </div>
                <div>
                    <label className="text-lg mr-2" htmlFor="host">Host</label>
                    <input
                        className="rounded-md px-4 py-2 bg-inherit border mb-6"
                        name="host"
                        placeholder="Host"
                        required
                    />
                </div>

                <div>
                    <label className="text-lg mr-2" htmlFor="description">Description</label>
                    <input
                        className="rounded-md px-4 py-2 bg-inherit border mb-6"
                        name="description"
                        placeholder="Description"
                        required
                    />
                </div>

                <div>
                    <label className="text-lg mr-2" htmlFor="date">Date</label>
                    <input
                        className="rounded-md px-4 py-2 bg-inherit border mb-6"
                        name="date"
                        placeholder="Date"
                        required
                    />
                </div>

                <div>
                    <label className="text-lg mr-2" htmlFor="start_time">Start Time</label>
                    <input
                        className="rounded-md px-4 py-2 bg-inherit border mb-6"
                        name="start_time"
                        placeholder="Start Time"
                        required
                    />
                </div>
                <div>
                    <label className="text-lg mr-2" htmlFor="end_time">End Time</label>
                    <input
                        className="rounded-md px-4 py-2 bg-inherit border mb-6"
                        name="end_time"
                        placeholder="End Time"
                        required
                    />
                </div>

                <div>
                    <label className="text-lg mr-2" htmlFor="location">Location</label>
                    <input
                        className="rounded-md px-4 py-2 bg-inherit border mb-6"
                        name="location"
                        placeholder="Location"
                        required
                    />
                </div>

                <div>
                    <label className="text-lg mr-2" htmlFor="image">Image</label>
                    <input
                        className="rounded-md px-4 py-2 bg-inherit border mb-6"
                        name="image"
                        placeholder="Image"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="text-center border border-foreground/20 rounded-md px-4 py-2 text-foreground mb-2 "
                >
                    Create Event
                </button>
            </form>

        </div>
    )
}

