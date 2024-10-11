import React from "react";

function Picsum(props: { src?: string }) {
    function getRandomNumber(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return (
        <img
            src={`https://picsum.photos/${getRandomNumber(40, 400)}/${getRandomNumber(40, 400)}`}
            className="outline-1 outline-black  rounded-xl mb-4  cursor-pointer transition-all duration-500 ease-in-out"
            alt="Gallery"
        />
    );
}

export default Picsum;
