
module.exports = {
  content: [
    "./index.html",
    "./App.tsx",
    "./constants.tsx",
    "./components/**/*.{ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        google: {
          blue: '#4285F4',
          red: '#EA4335',
          yellow: '#FBBC04',
          green: '#34A853'
        },
        dark: {
          bg: '#020617',
          card: '#0F172A',
          text: '#F8FAFC'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'sans-serif']
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'mesh': 'mesh 15s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
          '50%': { 'background-size': '200% 200%', 'background-position': 'right center' },
        },
        'mesh': {
          '0%': { transform: 'translate(0, 0) scale(1) rotate(0deg)' },
          '50%': { transform: 'translate(10%, 10%) scale(1.2) rotate(5deg)' },
          '100%': { transform: 'translate(-5%, -5%) scale(1.1) rotate(-5deg)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    }
  },
  plugins: [
    function({ addVariant }) {
      addVariant('theme-colorful', '.theme-colorful &')
    }
  ],
}
