module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'xss': '0.6rem',
        '10xl': '12rem'
      },
      colors: {
        'brand': {
          50: '#ece8e1',
          100: '#f5f2ed',
          450: '#8c826b',
          900: '#4c473b',
        }
      },
      spacing: {
        98: '26rem',
      }
    },
  },
  plugins: [],
}
