import Link from "next/link";

import { HydrateClient, api } from "@/trpc/server";
import Landing from "./Landing";
import Header from "./_components/Header";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import Footer from "./_components/Footer";

export default async function Home() {
    return (
        <HydrateClient>
            <Header />
            <Landing />
            <Footer />
        </HydrateClient>
    );
}
