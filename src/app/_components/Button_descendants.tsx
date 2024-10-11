import { Button } from "@/components/ui/button";
import React from "react";

function Button_descendants() {
    return (
        <Button
            className="descendants:border-none w-fit h-fit descendants:p-2 p-0  descendants:m-0"
            type="button"
        >
            <SignInButton mode="modal" />
        </Button>
    );
}

export default Button_descendants;
