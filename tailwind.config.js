/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        primary: '#2489D3',
        dark: '#334155',
        textColor: '#2489D3',
      },
      screens: {
        '2xl': '1320px'
      }
    },
  },
  plugins: [],
}

