"use client"
import React from "react";
const Wrapper = ({ children, className }) => {
    return (
        <div
            className={`w-full max-w-[1280px] px-4 md:px-8 lg:px-12 mx-auto ${
                className || ""
            }`}
        >
            {children}
        </div>
    );
};

export default Wrapper;