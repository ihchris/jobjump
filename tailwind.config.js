const neutral = { 50: '#f6f6f7', 100: '#eeeef0', 200: '#dddde2', 300: '#bcbcc6', 400: '#85858f', 500: '#6b6b76', 600: '#55555f', 700: '#3a3a43', 800: '#25252d', 900: '#17171c', 950: '#0b0b0e' }

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        slate: neutral,
        blue: { ...neutral, 600: '#17171c', 700: '#303037', 800: '#09090b' },
        indigo: neutral, violet: neutral, teal: neutral, cyan: neutral,
        brand: {
          navy: '#17171c',
          deep: '#0b0b0e',
          action: '#17171c',
          'action-hover': '#303037',
          'action-active': '#09090b',
          accent: '#70707b',
          'accent-ink': '#55555f',
          'accent-soft': '#f2f2f4',
          muted: '#dddde2',
          ink: '#17171c',
          paper: '#ffffff',
          surface: '#f6f6f7',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
