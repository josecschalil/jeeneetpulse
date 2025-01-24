"use client";
import 'katex/dist/katex.min.css';
import katex from 'katex';

const MathComponent = ({ text, block = false }) => {
    let latexHtml = '';
    
    try {
        latexHtml = katex.renderToString(text, {
            throwOnError: false,
            displayMode: block
        });
    } catch (e) {
        console.error("KaTeX error: ", e);
        latexHtml = 'Error rendering LaTeX';
    }

    return <span dangerouslySetInnerHTML={{ __html: latexHtml }} />;
};

const RenderTextWithLatex = ({ text }) => {

    if (!text) {
        return <span>No question text available</span>; // Fallback text in case of undefined or null
      }

      const escapedText = text.replace(/\\\\/g, '\\'); // this line took me 2-3hrs. fucker.

    // console.log(`text revcived: ${text}`)
    const parts = escapedText.split(/(\$.*?\$|\\\[.*?\\\])/g);
    
    return parts.map((part, index) => {
        if (part.startsWith('$') && part.endsWith('$')) {
            return <MathComponent key={index} text={part.slice(1, -1)} block={false} />;
        }
        
        if (part.startsWith('\\[') && part.endsWith('\\]')) {
            return <MathComponent key={index} text={part.slice(2, -2)} block={true} />;
        }

        return <span className="font-hindi"key={index}>{part}</span>;
    });
};


export default RenderTextWithLatex;