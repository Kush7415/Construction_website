/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary:    '#E07B2A',
        secondary:  '#1A2B4A',
        accent:     '#F5A623',
        background: '#FAFAF8',
        card:       '#FFFFFF',
        textMain:   '#1A1A1A',
        happiness:  '#2563EB',
        premium:    '#E07B2A',
        luxury:     '#F5A623',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      height: {
        18: '4.5rem',
      },
    },
  },
  plugins: [],
}
