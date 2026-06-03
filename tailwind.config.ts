import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  // Disable Tailwind's built-in `.container` utility so it doesn't collide
  // with the site's own `.container` class (Tailwind's caps max-width to the
  // breakpoint and isn't auto-centered, which left-shifts the layout).
  corePlugins: {
    container: false,
  },
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        surface: 'var(--color-surface)',
        'text-base': 'var(--color-text)',
        'text-muted': 'var(--color-text-muted)',
        'text-subtle': 'var(--color-text-subtle)',
        'border-light': 'var(--color-border)',
        'border-medium': 'var(--color-border-medium)',
        hover: 'var(--color-hover)',
        accent: 'var(--color-accent)',
        'accent-hover': 'var(--color-accent-hover)',
        shadow: 'var(--color-shadow)',
      },
      fontFamily: {
        sans: ['InterVariable', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
