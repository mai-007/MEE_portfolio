// tailwind.config.js
const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        animation: {
            "tracking-in-contract": "tracking-in-contract 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000)   both"
        },
        keyframes: {
            "tracking-in-contract": {
                "0%": {
                    "letter-spacing": "1em",
                    opacity: "0"
                },
                "40%": {
                    opacity: ".6"
                },
                to: {
                    "letter-spacing": "normal",
                    opacity: "1"
                }
            }
        }
    }
},
  darkMode: "class",
  plugins: [nextui()],
};