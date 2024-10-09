import { NavigationMenu } from "@/components/ui/navigation-menu";

function Nav() {
    return (
        <nav className="mb-2">
            <NavigationMenu className="gap-4">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </NavigationMenu>
        </nav>
    );
}

export default Nav;
