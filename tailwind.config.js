/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: 'var(--cream)',
        'cream-alt': 'var(--cream-alt)',
        blush: 'var(--blush)',
        gold: 'var(--gold)',
        'gold-dark': 'var(--gold-dark)',
        sage: 'var(--sage)',
        deep: 'var(--deep)',
        border: 'hsl(var(--border, 214.3 31.8% 91.4%))',
        background: 'hsl(var(--background, 0 0% 100%))',
        foreground: 'hsl(var(--foreground, 222.2 84% 4.9%))',
        primary: {
          DEFAULT: '#3f4020',
          foreground: '#ffffff',
        },
        muted: {
          DEFAULT: '#f5f5f4',
          foreground: '#78716c',
        }
      },
      fontFamily: {
        display: ['var(--display)', 'serif'],
        body: ['var(--body)', 'serif'],
        script: ['var(--script)', 'cursive'],
        date: ['var(--date)', 'serif'],
        arabic: ['var(--arabic)', 'serif'],
      }
    },
  },
  plugins: [],
}
