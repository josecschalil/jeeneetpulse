/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'max1': { max: '1080px' }, // Custom media query for max-width 1080px
      },
      fontFamily: {
      
        poppins: ['Poppins', 'Sans'], 
        istok:['Istok','Sans'],
        montserrat: ['Montserrat', 'Sans'], 
        instSans: ['instrumentSans', 'Sans'],
        instSansN: ['instrumentSansnorm', 'Sans'],  
        instSansB: ['instrumentSansBold', 'Sans'], 
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
