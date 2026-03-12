/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f49d25",
        "accent-red": "#ef4444",
        "background-light": "#f8f7f5",
        "background-dark": "#221a10",
        charcoal: "#1a1a1a",
      },
      fontFamily: {
        display: ["Montserrat", "sans-serif"],
        body: ["Be Vietnam Pro", "sans-serif"],
      },
      boxShadow: {
        'neo': '4px 4px 0px 0px #1a1a1a',
        'neo-lg': '8px 8px 0px 0px #1a1a1a',
        'neo-xl': '12px 12px 0px 0px #1a1a1a',
      },
      borderWidth: {
        '3': '3px',
      }
    },
  },
  plugins: [],
}
