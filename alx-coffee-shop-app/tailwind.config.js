module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        'coffee-primary': '#C67C4E',
        'coffee-secondary': '#EDD6C8',
        'coffee-dark': '#313131',
        'coffee-header': '#131313',
        'coffee-gray': '#E3E3E3',
        'coffee-light': '#F9F9F9',
        'coffee-text': '#2F2D2C',
        'coffee-muted': '#989898',
        'coffee-star': '#FBBE21'
      }
    }
  },
  plugins: []
};
