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
          light: '#fdfbf7', // warm off-white for bg
          primary: '#e65c00', // vibrant food orange
          secondary: '#2e4034', // deep forest green for authority
          accent: '#f2c14e', // warm yellow
          text: '#1a1a1a', // near black for text
          muted: '#6b7280', // standard muted text
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(0,0,0,0.08)',
      }
    },
  },
  plugins: [],
}
