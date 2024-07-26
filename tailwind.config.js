/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      blue: {
        100: '#e0f2fe',
        200: '#bae6fd',
        300: '#7dd3fc',
        400: '#38bdf8',
        500: '#0ea5e9',
        600: '#0284c7',
        700: '#0369a1',
        800: '#075985',
      },
      error: {
        DEFAULT: '#FF4C4C',
        bg: '#FFF0F0',
        text: '#D14747',
        dark: '#4F1717',
      },
    },
    extend: {
      colors: {
        success: {
          DEFAULT: '#509556',
          bg: '#E7FDE9',
          text: '#47854C',
          dark: '#264028',
        },
      },
    },
  },
  plugins: [],
};
