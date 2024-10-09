import React from "react";

function Cut(zindex: { zindex: number }) {
    const zIndex = zindex.zindex;
    return (
        <div
            className="h-12 bg-background w-full rounded-bottom-ellipse -my-2  rounded-t-none"
            style={{ zIndex: zIndex }}
        />
    );
}

export default Cut;
