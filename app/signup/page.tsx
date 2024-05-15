
import Link from "next/link";
import { headers } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { SubmitButton } from "./submit-button";

export default function SignUp() {

    const signUp = async (formData: FormData) => {
        "use server";
    
        const origin = headers().get("origin");
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        const supabase = createClient();
    
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${origin}/auth/callback`,
          },
        });
    
        if (error) {
          return redirect("/login?message=Could not authenticate user");
        }
    
        return redirect("/login?message=Check email to continue sign in process");
      };

return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md gap-2">
      <form className="animate-in flex-1 flex flex-col w-full gap-2 text-foreground pt-24">
        <label className="text-md" htmlFor="email">Email</label>
        <input
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            name="email"
            placeholder="you@example.com"
            required
        />
        <label className="text-md" htmlFor="password">Password</label>
        <input
        className="rounded-md px-4 py-2 bg-inherit border mb-6"
        type="password"
        name="password"
        placeholder="••••••••"
        required
        />  


        <SubmitButton
            formAction={signUp}
            className="text-center border border-foreground/20 rounded-md px-4 py-2 text-foreground mb-2 "
        >
            Sign Up
        </SubmitButton>
      </form>
    </div>
  );
}