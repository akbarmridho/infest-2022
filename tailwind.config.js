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
        'main': "url('/background-65.jpg')"
      },
      fontFamily: {
        tommy: ["tommy-medium", "sans-serif"],
        wotfard: ["wotfard-regular", "sans-serif"],
        tomlight: ["tommy-light", 'sans-serif']
      },
      animation: {
        'reverse-spin': 'reverse-spin 1s linear infinite'
      },
      keyframes: {
        'reverse-spin': {
          from: {
            transform: 'rotate(360deg)'
          },
        }
      }
    }
  },
  plugins: [],
}
