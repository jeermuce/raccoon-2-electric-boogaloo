import React from "react";

function Cut(props: { zindex: number; className?: string }) {
    const zIndex = props.zindex;
    return (
        <div
            className={`h-4 bg-background w-[100svw] max-w-[100svw] min-w-[100vw] rounded-bottom-ellipse -my-2  rounded-t-none ${props.className}`}
            style={{ zIndex: zIndex }}
        />
    );
}

export default Cut;
