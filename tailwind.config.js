const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Romelio: ['Romelio', ...defaultTheme.fontFamily.sans],
      },
      fontWeight: {
        100: 100,
      },
    },
  },
  plugins: [],
};
