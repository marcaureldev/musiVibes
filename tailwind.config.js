/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  
  theme: {
    extend: {
      colors: {
        teal: {
          200: '#99f6e4',
          800: '#115e59',
          900: '#134e4a',
        },
        emerald: {
          200: '#a7f3d0',
          900: '#064e3b',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  
  plugins: [],
}