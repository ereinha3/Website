/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'marquee': 'marquee 15s linear infinite',
        'float-1': 'float-1 3s ease-in-out infinite',
        'float-2': 'float-2 4s ease-in-out infinite',
        'float-3': 'float-3 5s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'float-1': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'float-2': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        'float-3': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      borderRadius: {
        '5%': '5%',
      },
      boxShadow: {
        'custom': '0 10px 20px rgba(0,0,0,0.2)',
      },
      textShadow: {
        'sm': '-2px 4px 4px rgba(0, 0, 0, 0.5)',
        'md': '-3px 8px 6px rgba(0, 0, 0, 0.5)',
        'lg': '-4px 12px 8px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    },
  ],
}


