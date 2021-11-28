module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'mblack': '#111',
        'mred': '#ff4655',
        'mwhite': '#ece8e1'
      },
      cursor: {
        'ne-resize': 'ne-resize',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
