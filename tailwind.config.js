/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#14264e',
          deep: '#0f1c38',
          action: '#2563eb',
          'action-hover': '#1d4ed8',
          'action-active': '#1e40af',
          accent: '#19c5b0',
          'accent-ink': '#087f75',
          'accent-soft': '#e5faf5',
          muted: '#dbe7f5',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
