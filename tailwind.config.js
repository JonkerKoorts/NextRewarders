/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        secondary: "#3c8469",
        main: "#3d7761",
        "color-2": "#f2eee8",
        "color-4": "#83ae9d",
        "color-5": "#6caa94",
        "color-6": "#a4a4a4",
        "color-7": "#9cc4bc",
        "color-8": "#525252",
      },
      textColor: {
        secondary: "#3c8469",
        main: "#3d7761",
        "color-2": "#f2eee8",
        "color-4": "#83ae9d",
        "color-5": "#6caa94",
        "color-6": "#a4a4a4",
        "color-7": "#9cc4bc",
        "color-8": "#525252",
      },
    },
  },
  variants: {},
  plugins: [],
};
