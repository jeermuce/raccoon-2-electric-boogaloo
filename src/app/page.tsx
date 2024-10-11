import Link from "next/link";

import { HydrateClient, api } from "@/trpc/server";
import Landing from "./Landing";
import Header from "./_components/Header";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

export default async function Home() {
    return (
        <HydrateClient>
            <Header />
            <Landing />
            <footer className="bg-background h-fit pt-10 flex flex-col items-center justify-center">
                <div className="columns-[300px] w-full">
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                    <SignedOut>
                        <Button className="" type="button">
                            <SignInButton />
                        </Button>
                    </SignedOut>
                </div>
            </footer>
        </HydrateClient>
    );
}
