import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#34462F',
          700: '#3E5238',
        },
        olive: {
          DEFAULT: '#6B7645',
          600: '#7A8650',
        },
        sage: {
          DEFAULT: '#A7B89C',
          200: '#CBD5C1',
          100: '#E3E9DD',
        },
        'off-white': '#FAF6EE',
        beige: {
          DEFAULT: '#E7DBC4',
          200: '#F0E8D8',
        },
        sand: '#D9CBAF',
        terracotta: {
          DEFAULT: '#CB7C5A',
          soft: '#E0A183',
        },
        wood: '#A9825A',
        ink: {
          900: '#242C1F',
          700: '#3B4433',
          500: '#5E6653',
          400: '#838A78',
        },
        cream: {
          DEFAULT: '#F3EEE2',
          dim: '#C7CDB9',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xs: '4px',
        sm: '8px',
        md: '14px',
        lg: '22px',
        xl: '32px',
        pill: '999px',
      },
      boxShadow: {
        xs: '0 1px 2px rgba(52,70,47,.06)',
        sm: '0 2px 8px rgba(52,70,47,.07)',
        md: '0 8px 24px rgba(52,70,47,.09)',
        lg: '0 18px 48px rgba(52,70,47,.12)',
      },
      transitionTimingFunction: {
        soft: 'cubic-bezier(.32,.72,.34,1)',
      },
      maxWidth: {
        container: '1200px',
        narrow: '720px',
      },
      letterSpacing: {
        eyebrow: '0.18em',
      },
    },
  },
  plugins: [],
}
export default config
