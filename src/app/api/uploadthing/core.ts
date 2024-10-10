import { auth, authMiddleware } from "@clerk/nextjs/server";
import { type FileRouter, createUploadthing } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

// FileRouter for your app, can contain multiple FileRoutes

export const ourFileRouter = {
    // Example "profile picture upload" route - these can be named whatever you want!
    profilePicture: f(["image"])
        .middleware(() => auth())
        .onUploadComplete((data) => console.log("file", data)),

    // This route takes an attached image OR video
    messageAttachment: f(["image", "video"])
        .middleware(() => auth())
        .onUploadComplete((data) => console.log("file", data)),

    // Takes exactly ONE image up to 2MB
    strictImageAttachment: f({
        image: { maxFileSize: "2MB", maxFileCount: 1, minFileCount: 1 },
    })
        .middleware(() => auth())
        .onUploadComplete((data) => console.log("file", data)),

    // Takes up to 4 2mb images and/or 1 256mb video
    mediaPost: f({
        image: { maxFileSize: "2MB", maxFileCount: 4 },
        video: { maxFileSize: "256MB", maxFileCount: 1 },
    })
        .middleware(() => auth())
        .onUploadComplete((data) => console.log("file", data)),
    // Takes up to 10 4mb images
    bulkImages: f({ image: { maxFileSize: "4MB", maxFileCount: 10 } })
        .middleware(() => auth())
        .onUploadComplete((data) => console.log("file", data)),
    // Takes up to 4 2mb images, and the client will not resolve
    // the upload until the `onUploadComplete` resolved.
    withAwaitedServerData: f(
        { image: { maxFileSize: "2MB", maxFileCount: 4 } },
        { awaitServerData: true },
    )
        .middleware(() => auth())
        .onUploadComplete((data) => {
            return { foo: "bar" as const };
        }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
