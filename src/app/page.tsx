import Link from "next/link";

import { HydrateClient, api } from "@/trpc/server";
import Landing from "./Landing";
import Header from "./_components/Header";

export default async function Home() {
    const hello = await api.image.hello({ text: "from tRPC" });

    void api.image.getLatest.prefetch();

    return (
        <HydrateClient>
            <Header />
            <Landing />
            <footer className="bg-background">
                <div>heal</div>
                <div>heal</div>
                <div>heal</div>
            </footer>
        </HydrateClient>
    );
}
