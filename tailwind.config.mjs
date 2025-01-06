/** @type {import('tailwindcss').Config} */

export const content = [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    fontFamily: {
      karla: ['Karla', 'sans-serif'],
    },
    colors: {
      background: "var(--background)",
      foreground: "var(--foreground)",
    },
  },
};
export const plugins = [
  require('daisyui'),
];
