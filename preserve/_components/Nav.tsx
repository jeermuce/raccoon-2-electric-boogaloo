import { NavigationMenu } from "@/components/ui/navigation-menu";

function Nav() {
    return (
        <nav className="flex w-full flex-row items-center justify-between">
            <img
                src="https://picsum.photos/128/48"
                alt="logo"
                className="h-12 w-auto"
            />
            <NavigationMenu className="gap-4">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </NavigationMenu>
        </nav>
    );
}

export default Nav;
