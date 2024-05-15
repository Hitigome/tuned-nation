import AuthButton from "../components/AuthButton";
import DeployButton from "../components/DeployButton";

export default function NavBar() {
    return (
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
            <div className="w-full flex justify-between items-center p-3 text-sm">
                <a href='/'>Tuned Nation</a>
                <AuthButton />
            </div>
        </nav>
    );
            
}