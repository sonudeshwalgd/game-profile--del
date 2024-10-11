/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  corePlugins: {},
  theme: {
    extend: {
      colors: {
        primary: '#ff5722',
        alpha: '#ff5722',
        Blue: '#617A8C',
        Light_Blue_1: '#7DA0C3',
        Light_Blue_2: '#DBE2E9',
        Dark_Blue: '#2D3D4D',
      },
      fontFamily: {
        inter: ['inter'],
      },
      screens: {
        '3xl': '1600px',
      },
      fontSize: {
        H1_Headings: ['28px', {lineHeight: '33.89px', fontWeight: 600}],
        H2_Subheadings: ['20px', {lineHeight: '24.2px', fontWeight: 400}],
      },
    },
  },
  plugins: [],
};
