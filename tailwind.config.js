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
        alt: 'var(--font-baiJamjuree)',
        logo: 'var(--font-righteous)',
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
          50: '#8D97F7',
          100: '#6674f4',
          300: '#5061fc',
          700: '#364AFC',
        },
        terciary: {
          100: '#18B4A4',
          300: '#16A394',
          500: '#149083',
        },
        white: '#f7fafc',
        gray: {
          50: '#F5F5F5',
          100: '#D6D6D6',
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
