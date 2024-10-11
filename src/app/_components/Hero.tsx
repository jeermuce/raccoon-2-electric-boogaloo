"use client";
import { Button } from "@/components/ui/button";
import { UploadButton, UploadDropzone } from "@/utils/uploadthing";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { toast } from "sonner";

function Hero() {
    const backgroundImageURL = process.env.NEXT_PUBLIC_IMG;
    console.log(backgroundImageURL);
    return (
        <div
            className=" h-[100svh] w-full bg-cover rounded-t-none z-50 rounded-ellipse  all"
            style={{ backgroundImage: `url(${backgroundImageURL})` }}
        />
    );
}

export default Hero;
