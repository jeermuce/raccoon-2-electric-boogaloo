import React from "react";

function Cut(zindex: { zindex: number }) {
    const zIndex = zindex.zindex;
    return (
        <div
            className="h-4 bg-background w-[100svw] max-w-[100svw] min-w-[100vw] rounded-bottom-ellipse -my-2  rounded-t-none"
            style={{ zIndex: zIndex }}
        />
    );
}

export default Cut;
