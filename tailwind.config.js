/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: 'var(--color-black)'
        },
        gray: {
          DEFAULT: 'var(--color-gray)',
          50: 'var(--color-gray-50)'
        },
        pink: {
          DEFAULT: 'var(--color-pink)'
        }
      }
    }
  },
  plugins: []
}
