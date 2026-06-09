/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary:    '#FF6B00',
        secondary:  '#1C1C1E',
        accent:     '#FF8C00',
        background: '#FAFAFA',
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
