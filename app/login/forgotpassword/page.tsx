import { createClient } from "@/utils/supabase/server";

export default async function forgotPassword() {

    const sendResetEmail = async (formData: FormData) => {
        "use server"
        const email = formData.get("email") as string;
        const supabase = createClient();
        const {data, error} = await supabase.auth.resetPasswordForEmail(email);
        if(error) {
            console.log(error);
            return 
        }
    }
    return(
        <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
            <form className="animate-in flex-1 flex flex-col w-full gap-2 text-foreground pt-24" >
                <label className="text-md" htmlFor="email">
                Email
                </label>
                <input
                className="rounded-md px-4 py-2 bg-inherit border mb-6"
                name="email"
                placeholder="you@example.com"
                required
                />

                <button 
                    formAction={sendResetEmail}
                    className="w-full border rounded p-2"
                >Submit
                </button>
            </form>
        

        </div>
    );
}