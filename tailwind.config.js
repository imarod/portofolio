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
      borderWidth:{
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
      width:{
        '100': '25rem',
        '120': '30rem',
        '128': '32rem',
        '144': '36rem',
      },
      scale:{
        '1': '0.01',
        '2': '0.02',
        '3': '0.03',
        '4': '0.04',
        '5': '0.05',
        '6': '0.06',
        '7': '0.07',
        '8': '0.08',
        '9': '0.09',
        '10.0':'0.1',
        '11':'0.11',
        '12':'0.12',
        '13':'0.13',
        '14':'0.14',
        '15':'0.15',
        '16':'0.16',
        '17':'0.17',
        '18':'0.18',
        '19':'0.19',
        '20.0':'0.20',
        '6.5': '0.065',
        '10': '0.1',
        '20': '0.2',
        '30': '0.3',
        '40': '0.4',
        '50': '0.5',
        '80': '0.8',
        '110': '1.1',
        '120': '1.2',
      }
    },
  },
  plugins: [],
}

