import React from "react";

import { Button } from "@/components/ui/button";
import { api } from "@/trpc/server";
import { SignedIn } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

async function Gallery() {
    const response = await api.art.getAll();
    const isSignedIn = auth().sessionId !== null;

    return (
        <div className="columns-[300px]  z-30 bg-background rounded-t-none overflow-hidden mid rounded-ellipse py-8 px-4   w-full gap-4 ">
            {[
                ...response,
                ...response,
                ...response,
                ...response,
                ...response,
                ...response,
                ...response,
                ...response,
                ...response,
                ...response,
                ...response,
                ...response,
                ...response,
                ...response,
                ...response,
                ...response,
                ...response,
            ].map((image) => (
                <div
                    className="relative mb-4 overflow-hidden w-full rounded-[1.2rem]"
                    key={image.id}
                >
                    <img
                        key={image.id}
                        src={image.url}
                        className={`outline-1 ${image.sfw === 0 /*&& !isSignedIn*/ && "blur-3xl"}   z-0 outline-black cursor-pointer transition-all duration-500 ease-in-out`}
                        alt="Gallery"
                    />
                    <SignedIn>
                        <Button
                            variant="destructive"
                            className="absolute top-2 rounded-full border-none hover:scale-105 h-8 w-8 right-2 child:stroke-accent-foreground"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="h-6 w-6 absolute "
                            >
                                <title>delete</title>
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                />
                            </svg>
                        </Button>
                        <Button
                            variant="secondary"
                            className="absolute top-2 rounded-full border-none hover:scale-105 h-8 w-8 left-2 child:stroke-accent-foreground"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="h-6 w-6 absolute"
                            >
                                <title>edit</title>
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                                />
                            </svg>
                        </Button>
                    </SignedIn>
                </div>
            ))}
        </div>
    );
}

export default Gallery;
