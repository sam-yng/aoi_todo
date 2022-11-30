/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        interreg: ['interreg'],
        interbod: ['interbod'],
        interlight: ['interlight']

      },

      keyframes: {
        breathing: {
          '0%': { transform: 'scale(0.95)' },

          '25%': { transform: 'scale(1)' },

          '60%': { transform: 'scale(0.95)' },

          '100%': { transform: 'scale(0.95)' },
        },

        shake: {
          '0%': { transform: 'translateX(0)' },
          '12.5%': { transform: 'translateY(0)' },

          '25%': { transform: 'translateX(3px)' },
          '37.5%': { transform: 'translateY(2px)' },

          '50%': { transform: 'translateX(-3px)' },
          '62.5%': { transform: 'translateY(-2px)' },

          '75%': { transform: 'translateX(3px)' },
          '87.5%': { transform: 'translateY(2px)' },

          '100%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateY(0)' },
        },

      },
    },

    animation: {

      breathing: 'breathing 4s ease-out infinite normal',
      shake: 'shake 0.35s infinite',

    },

    plugins: [],
  }
};
