module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      'sans': ['Plus Jakarta Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        yellow: '#F5DB5C',
        blue: {
          700: '#104175',
          500: '#1659A1',
        },
      },
      borderWidth: {
        '3': '3px',
        '6': '6px',
      },
      borderRadius: {
        '50': '50px',
        '20': '20px',
      },
    },
  },
  variants: {
    extend: {},
  },
  corePlugins: {container: false},
  plugins: [],
}
