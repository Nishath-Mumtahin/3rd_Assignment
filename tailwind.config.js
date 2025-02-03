/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        fontFamily:  {
          sora:  ['Sora',  'sans-serif'],
        },
        fontFamily:  {
          poppins:  ['Poppins',  'sans-serif'],
        },
        colors:  {
          success:  '#16a34a'
        },
      },
    },
    plugins: [],
  }