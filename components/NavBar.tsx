import AuthButton from "../components/AuthButton";

export default function NavBar() {
    return (
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
            <div className="w-full flex justify-between items-center p-3 text-base">
                <div className="flex flex-row">
                    <a href='/' className="mt-1 text-lg">Tuned Nation</a>
                    <a href='/event/create' className="mt-2 ml-7">Events</a>
                </div>

                <AuthButton />
            </div>
        </nav>
    );
            
}