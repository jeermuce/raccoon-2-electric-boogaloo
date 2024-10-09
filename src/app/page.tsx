import Link from "next/link";

import { LatestPost } from "@/app/_components/post";
import { HydrateClient, api } from "@/trpc/server";
import Header from "./_components/Header";
import Landing from "./Landing";

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
