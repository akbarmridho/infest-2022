/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tgreen': {
          100: '#6C9493',
          200: '#447270',
          300: '#203D3B'
        },
        'tyellow': {
          100: '#F6E272',
          200: '#F6B815',
          300: '#F69312'
        }
      },
      backgroundImage: {
        'main': "url('/background.svg')",
        'main-50': "url('/background-50.jpg')",
        'main-75': "url('/background-75.jpg')"
      },
      fontFamily: {
        tommy: ["tommy-medium", "sans-serif"],
        wotfard: ["wotfard-regular", "sans-serif"]
      }
    }
  },
  plugins: [],
}
