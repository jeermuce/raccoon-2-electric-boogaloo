import { Button } from "@/components/ui/button";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import React from "react";
import Button_descendants from "./Button_descendants";

function Footer() {
    return (
        <footer className="w-full content-grid min-h-32 h-fit overflow-hidden bg-foreground text-background  ">
            <div className="big w-full bg-blue-300 content-grid">
                <SignedIn>
                    <UserButton />
                </SignedIn>
                <SignedOut>
                    <Button
                        className="descendants:border-none w-fit h-fit descendants:p-0 p-0  descendants:m-0"
                        type="button"
                    >
                        <SignInButton mode="modal" />
                    </Button>
                </SignedOut>
            </div>
        </footer>
    );
}

export default Footer;
