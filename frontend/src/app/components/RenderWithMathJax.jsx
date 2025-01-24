"use client";

import React, { useRef, useEffect } from 'react';

const MathComponent = ({ text, block = false }) => {
    const containerRef = useRef(null);

    // Load MathJax script dynamically from CDN
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js'; // MathJax CDN URL
        script.async = true;
        script.onload = () => {
            if (containerRef.current) {
                window.MathJax.typeset([containerRef.current]); // Trigger typesetting for current ref
            }
        };
        document.head.appendChild(script);

        return () => {
            // Cleanup: remove script when component unmounts
            document.head.removeChild(script);
        };
    }, []); // Run once when component mounts

    // Run MathJax typesetting after text changes
    useEffect(() => {
        if (window.MathJax) {
            window.MathJax.typeset([containerRef.current]); // Trigger typesetting after text change
        }
    }, [text]);

    const mathjaxStyle = block ? { display: 'block' } : { display: 'inline' };

    return (
        <span ref={containerRef} style={mathjaxStyle} dangerouslySetInnerHTML={{ __html: `\\(${text}\\)` }} />
    );
};

const RenderTextWithMathJax = ({ text }) => {
    const parts = text.split(/(\$.*?\$|\\\[.*?\\\])/g);

    return parts.map((part, index) => {
        if (part.startsWith('$') && part.endsWith('$')) {
            return <MathComponent key={index} text={part.slice(1, -1)} block={false} />;
        }

        if (part.startsWith('\\[') && part.endsWith('\\]')) {
            return <MathComponent key={index} text={part.slice(2, -2)} block={true} />;
        }

        return <span key={index}>{part}</span>;
    });
};

export default RenderTextWithMathJax;