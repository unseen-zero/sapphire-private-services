import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        sapphire: {
          900: '#0f172a',
          800: '#1e293b',
          500: '#0ea5e9',
          400: '#38bdf8',
        }
      }
    },
  },
  plugins: [],
}
export default config

