/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      fontFamily:{
        'homemade-apple': ['"Homemade Apple"', 'cursive'],
        'quick-sand': ['Quicksand'],
        'roboto': ['Roboto'],
        'poppins': ['Poppins'],
      },
      opacity:{
        '2': '0.02',
        '3': '0.03',
        '5': '0.05',
        '6': '0.06',
        '7': '0.07',
      },
      border:{
        '1': '1px',
        '1.5': '1.5px',
        '0.5': '0.5px',
      },
      duration:{
        '10': '10ms',
        '75': '75ms',
      },
      keyframes: {
        aurora: {
          '0%': { transform: 'translateX(0) translateY(0)', opacity: '0.5' },
          '50%': { transform: 'translateX(50px) translateY(50px)', opacity: '0.8' },
          '100%': { transform: 'translateX(-50px) translateY(-50px)', opacity: '0.5' },
        },
      },
      animation: {
        aurora: 'aurora 6s infinite ease-in-out',
      },
    },
  },
  plugins: [],
}

