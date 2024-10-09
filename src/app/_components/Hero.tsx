import { Button } from "@/components/ui/button";

function Hero() {
    const backgroundImageURL = process.env.NEXT_PUBLIC_IMG;
    console.log(backgroundImageURL);
    return (
        <div
            className="grid grid-cols-1 rounded-bottom-ellipse rounded-t-none  md:grid-cols-2 gap-0  overflow-clip w-[100svw] max-w-[100svw] min-w-[100vw] h-[100svh] max-h-[100svh] min-h-[100svh]   z-50 bg-cover hero"
            style={{ backgroundImage: `url(${backgroundImageURL})` }}
        >
            <div className="flex flex-col justify-center items-start backdrop-blur-lg bg-black/20  p-4">
                <h1 className="text-3xl md:text-5xl">PORTAFOLIO</h1>
                <h2 className="text-xl md:text-3xl">Alexis Pantoja</h2>
                <div className="flex flex-col md:flex-row gap-4 items-center justify-start  w-full">
                    <Button className="w-full md:w-auto" variant="secondary">
                        Mira mi Arte
                    </Button>
                    <Button className="w-full md:w-auto">Contacto</Button>
                </div>
            </div>

            <img
                className=" overflow-clip -mt-4 md:mt-0 object-cover h-full flex backdrop-blur-lg bg-black/20 "
                src={backgroundImageURL}
                alt="hero"
            />
        </div>
    );
}

export default Hero;
