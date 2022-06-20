/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['/Users/fmartinez/FRONTEND_PROJECTS/fabianmartinezblog/public/index.html'],
  theme: {
    extend: {
      fontFamily:{
        'lato':['Lato', 'sans-serif'],
        'borlow-semi-condensed': ['Borlow Semi Condensed', 'grotesk']
      },

      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },

        divmovement: {
          '0%': {}
        },
      },
      animation: {
        'waving-hand': 'wave 2s linear infinite',
        'top-move': 'divmovement 1s linear infinite',
      },
    },
  },
  plugins: [


  ],
}
