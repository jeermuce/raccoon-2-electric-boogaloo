import React from "react";

function Cut(props: { zindex: number; className?: string }) {
    const zIndex = props.zindex;
    return (
        <div
            className={`h-4 bg-background w-[100%] max-w-[100%] min-w-[100%] rounded-ellipse -my-2  rounded-t-none ${props.className}`}
            style={{ zIndex: zIndex }}
        />
    );
}

export default Cut;
