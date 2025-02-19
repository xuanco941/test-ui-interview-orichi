/** @type {import('tailwindcss').Config} */

module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: [
    "./src/view/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
      },
      screens: {
        'below-sm': { 'max': '599px' },
        'below-md': { 'max': '899px' },  
        'below-lg': { 'max': '1199px' },
        'below-xl': { 'max': '1535px' },
        'sm': { 'min': '600px' },
        'md': { 'min': '900px' },
        'lg': { 'min': '1200px' },
        'xl': { 'min': '1536px' },

      },
    
    },
  },
  plugins: [],
};
