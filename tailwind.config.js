/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-inter)',
        alt: 'var(--font-righteous)',
      },
      blur: {
        xl: '64px',
        full: '194px',
      },
      borderWidth: {
        6: '6px',
      },
      colors: {
        primary: {
          50: '#81B0EF',
          100: '#6FA5EC',
          300: '#4A8FE7',
          400: '#3883E5',
          500: '#2678E3',
          600: '#1C6ED9',
          700: '#1A65C7',
          800: '#175CB5',
        },
        gray: {
          50: '#eaeaea',
          100: '#bebebf',
          200: '#9e9ea0',
          300: '#727275',
          400: '#56565a',
          500: '#2c2c31',
          600: '#28282d',
          700: '#1f1f23',
          800: '#18181b',
          900: ' #121215',
          950: '#09090B',
        },
        success: {
          300: '#4CAF50',
          500: '#2E7D32',
          700: '#1B5E20',
        },
        danger: {
          300: '#EF5350',
          500: '#D32F2F',
          700: '#C62828',
        },
        warn: {
          300: '#FCB35F',
          500: '#FBA94C',
          700: '#FBA037',
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
