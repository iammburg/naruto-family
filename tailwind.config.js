/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            textShadow: {
                DEFAULT: "0 2px 4px rgba(0, 0, 0, 10)",
                md: "0 3px 6px rgba(0, 0, 0, 10)",
                lg: "0px 0px 6px rgba(255,255,255,0.7)",
                xl: "0 20px 25px rgba(0, 0, 0, 10)",
                "2xl": "0 25px 50px rgba(0, 0, 0, 0.25)",
                none: "none",
            },
            fontFamily: {
                sansJP: [
                    "Noto Serif JP",
                    "sans-serif",
                    ...defaultTheme.fontFamily.sans,
                ],
            },
        },
    },
    plugins: [
        require("daisyui"),
        plugin(function ({ addUtilities, theme, e }) {
            const newUtilities = {};
            const textShadows = theme("textShadow");

            Object.keys(textShadows).forEach((key) => {
                const value = textShadows[key];
                newUtilities[`.${e(`text-shadow-${key}`)}`] = {
                    textShadow: value,
                };
            });

            addUtilities(newUtilities, ["responsive", "hover"]);
        }),
    ],
};
