const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Romelio: ['Romelio', ...defaultTheme.fontFamily.sans],
        Circular: ['CircularStd', ...defaultTheme.fontFamily.sans],
      },
      fontWeight: {
        100: 100,
        200: 200,
        300: 300,
        400: 400,
      },
      colors: {
        brown: '#5E1F12',
        redBrown: '#C6453E',
      },
      screens: {
        mobile: '375px',
      },
    },
  },
  plugins: [],
};
