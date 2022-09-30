/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('grandchild', '& > * > *');
      addVariant('child-hover', '& > *:hover');
      addVariant('grandchild-hover', '& > * > *:hover');
    },
  ],
};
