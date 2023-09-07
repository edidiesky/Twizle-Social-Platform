import React, { useState } from "react";
import TwitterIcon from "../../assets/svg/twitter";
export default function Preloader() {

    return (
        <div
            className="flex item-center justify-center"
            style={{ width: "100vw", position: "fixed", height: "100vh", background: "var(--white)" }}
        >
            <TwitterIcon />
        </div>
    );
}
