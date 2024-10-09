import Link from "next/link";

import { LatestPost } from "@/app/_components/post";
import { HydrateClient, api } from "@/trpc/server";
import Landing from "./Landing";
import Nav from "./_components/Nav";
import Header from "./_components/Header";

export default async function Home() {
    const hello = await api.post.hello({ text: "from tRPC" });

    void api.post.getLatest.prefetch();

    return (
        <HydrateClient>
            <Header />
            <Landing />
            <footer className="bg-foreground">
                <div>heal</div>
                <div>heal</div>
                <div>heal</div>
            </footer>
        </HydrateClient>
    );
}
