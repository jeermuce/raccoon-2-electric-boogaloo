import React from "react";
import Cut from "./_components/Cut";
import Gallery from "./_components/Gallery";
import Hero from "./_components/Hero";

function Landing() {
    return (
        <main className=" flex flex-col items-center   ">
            <Hero />
            <Cut zindex={40} />
            <Gallery />
            <Cut zindex={20} />
        </main>
    );
}

export default Landing;
