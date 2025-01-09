"use client";

import { useEffect } from "react";

const MathRenderer = ({ content }) => {
    useEffect(() => {
        if (typeof window !== "undefined" && window.MathJax) {
            window.MathJax.typeset();
        }
    }, [content]);

    return <div dangerouslySetInnerHTML={{ __html: content }} />;
};

export default MathRenderer;
