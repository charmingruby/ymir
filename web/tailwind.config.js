/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: 'var(--font-roboto)',
      alt: 'var(--font-righteous)',
    },
    colors: {
      primary: {
        300: '#32A6C3',
        400: '#2D93AD',
        500: '#2A8AA2',
        600: '#267C92',
        700: '#216E82',
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
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
}
