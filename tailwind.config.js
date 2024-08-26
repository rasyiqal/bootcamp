/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html','form.html'],
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        bg:'#D1F3F2',
        primary: '#0097A7',
        dark: '#073763',
        textColor: '#0097A7',
      },
      screens: {
        'sm': '300px',
        'md': '768px', 
        'lg': '1024px', 
        'xl': '1280px',
        '2xl': '1320px'
      }
    },
  },
  plugins: [],
}

