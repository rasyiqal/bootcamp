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
        primary: '#2489D3',
        dark: '#334155',
        textColor: '#2489D3',
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

