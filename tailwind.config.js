/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0B1F46',
          'navy-dark': '#06122B',
          'navy-light': '#122D64',
          blue: '#1455A0',
          'blue-light': '#EBF3FC',
          gold: '#E7B52C',
          'gold-light': '#FEF8E7',
          'gold-dark': '#C9981A',
          bg: '#FFFFFF',
          'bg-alt': '#F4F7FB',
          text: '#1B2430',
          muted: '#667085',
          border: '#E2E8F0',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(11, 31, 70, 0.06), 0 2px 6px -1px rgba(11, 31, 70, 0.04)',
        'card-hover': '0 12px 30px -4px rgba(11, 31, 70, 0.12), 0 4px 10px -2px rgba(11, 31, 70, 0.06)',
        'elevated': '0 20px 40px -10px rgba(11, 31, 70, 0.18)',
      },
    },
  },
  plugins: [],
}
