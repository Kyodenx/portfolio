/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'CinzaEscuro':'#242424',
      'Dourado':'#615A27',
      'CinzaClaro':'#706E6F',
      'Branco': '#F8F6F4',
    },
    extend: {
      backgroundImage:{
      
      },
    },
    
  },
  darkMode: 'class',
  plugins: [],
}