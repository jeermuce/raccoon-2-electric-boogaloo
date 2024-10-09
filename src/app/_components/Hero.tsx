import { Button } from "@/components/ui/button";

function Hero() {
    const backgroundImageURL = process.env.NEXT_PUBLIC_IMG;
    console.log(backgroundImageURL);
    return (
        <div
            className="grid grid-cols-1 relative rounded-bottom-ellipse rounded-t-none p-0  md:grid-cols-2 gap-0  overflow-clip w-[100svw] max-w-[100svw] min-w-[100vw] h-[100svh] max-h-[100svh] min-h-[100svh]   z-50 bg-cover hero"
            style={{ backgroundImage: `url(${backgroundImageURL})` }}
        >
            <div className="flex flex-col h-full flex-1 -z-10 justify-center size items-start backdrop-blur-lg bg-black/50  p-8   ">
                <h1 className="text-3xl md:text-5xl">PORTAFOLIO</h1>
                <h2 className="text-xl md:text-3xl">Alexis Pantoja</h2>
                <div className="flex  flex-row gap-4 items-center   w-full">
                    <Button className="w-full md:w-auto" variant="secondary">
                        Mira mi Arte
                    </Button>
                    <Button className="w-full md:w-auto">Contacto</Button>
                </div>
            </div>

            <img
                className=" overflow-clip md:mt-0 object-cover z-0 h-full flex backdrop-blur-3xl rounded-bottom-ellipse rounded-t-none md:rounded-none -mt-2 "
                src={backgroundImageURL}
                alt="hero"
            />
        </div>
    );
}

export default Hero;
