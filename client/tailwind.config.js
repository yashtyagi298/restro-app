/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors:{
        primary:"#FF7426",
        dark:{
          5:'rgba(0,0,0,0.5)',
          60:'rgba(0,0,0,0.6)',
          100: '#00000'
        },
        light:'#e7FAFE'
      },
      fontFamily:{
        lobster:['Lobster','system-ui'],
        inter:['Inter Variable','sans-serif']
      },
      screens:{
        md:'821px',
        lg:'1025px',
        xl:'1281px'
      }
    },
  },
  plugins: [],
}

