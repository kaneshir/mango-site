import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{vue,js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        mango: {
          red: '#E63946',
          orange: '#F77F00',
          yellow: '#FCBF49',
          green: '#2A9D8F',
          dark: '#1A1A2E',
        },
      },
      backgroundImage: {
        'mango-gradient': 'linear-gradient(135deg, #E63946 0%, #F77F00 35%, #FCBF49 65%, #2A9D8F 100%)',
        'mango-gradient-text': 'linear-gradient(90deg, #F77F00 0%, #FCBF49 50%, #2A9D8F 100%)',
      },
    },
  },
  plugins: [],
} satisfies Config
