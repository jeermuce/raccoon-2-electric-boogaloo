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
            className="relative  rounded-ellipse rounded-t-none p-0 flex  flex-col md:flex-row  overflow-hidden w-[100lvw] max-w-[100lvw] min-w-[100lvw] h-[100svh] max-h-[100svh] min-h-[100svh]   z-50 bg-cover hero"
            style={{ backgroundImage: `url(${backgroundImageURL})` }}
        >
            <div className="flex overflow-hidden  flex-1 flex-col h-full md:gap-4 gap-1 -z-10 justify-center size items-start backdrop-blur-lg bg-black/50  md:p-8   ">
                <div className="overflow-hidden max-h-full ">
                    <h1 className="text-2xl md:text-4xl">Alexis Pantoja</h1>
                    <h2 className="text-base md:text-2xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reiciendis voluptate ipsum ipsam aspernatur corrupti.
                    </h2>
                </div>
                <div className="flex sm:flex-nowrap  flex-row gap-4 items-center   w-full">
                    <Button
                        className="min-w-fit w-full md:w-auto"
                        variant="secondary"
                    >
                        Mira mi Arte
                    </Button>
                    <Button className="w-full min-w-fit md:w-auto">
                        Contacto
                    </Button>

                    <SignedIn>
                        <UploadDropzone
                            endpoint="bulkImages"
                            onClientUploadComplete={(res) => {
                                // Do something with the response
                                console.log("Files: ", res);
                                toast.success("Upload Completed");
                            }}
                            onUploadError={(error: Error) => {
                                // Do something with the error.
                                toast.error(`ERROR! ${error.message}`);
                            }}
                        />
                    </SignedIn>
                </div>
            </div>

            <div className="backdrop-blur-3xl w-1/2 h-full">
                <img
                    className="w-full  object-cover h-full"
                    src={backgroundImageURL}
                    alt="hero"
                />
            </div>
        </div>
    );
}

export default Hero;
