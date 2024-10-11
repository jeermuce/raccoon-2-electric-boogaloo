import React from "react";
import Cut from "./_components/Cut";
import Gallery from "./_components/Gallery";
import Hero from "./_components/Hero";

function Landing() {
    return (
        <main className="content-grid  ">
            <Hero />
            <Cut zindex={40} />
            <Gallery />
            <Cut zindex={20} />
        </main>
    );
}

export default Landing;
