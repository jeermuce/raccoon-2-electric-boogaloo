"use client";
import React, { useEffect } from "react";
import Nav from "./Nav";

function Header() {
    useEffect(() => {
        const handleScroll = () => {
            const header = document.getElementById("header");
            if (!header) return;
            const scrollPosition = window.scrollY;
            const halfScreenHeight = window.innerHeight / 2;

            if (scrollPosition > halfScreenHeight) {
                header.classList.add("translate-y-0");
                header.classList.remove("-translate-y-full");
            } else {
                header.classList.add("-translate-y-full");
                header.classList.remove("translate-y-0");
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            id="header"
            className="overflow-clip backdrop-blur-lg z-[100]  rounded-bottom-ellipse rounded-t-none bg-background/60 fixed top-0 w-full max-w-[1280px] transition-transform duration-300 -translate-y-full"
        >
            <img
                src="https://picsum.photos/128/48"
                alt="logo"
                className="min-h-full w-auto"
            />
            <Nav />
        </header>
    );
}

export default Header;
