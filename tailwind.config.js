/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('grandchild', '& > * > *');
      addVariant('child-hover', '& > *:hover');
      addVariant('grandchild-hover', '& > * > *:hover');
      addVariant('second', '&:nth-child(2)');
      addVariant('third', '&:nth-child(3)');
    },
  ],
};
