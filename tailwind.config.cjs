/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6D4AFF',
          hover: '#8B7FFF',
          active: '#5D3AEF',
          tint: '#F5F4FF',
        },
        gray: {
          900: '#1C1B1F',
          700: '#49454F',
          500: '#79747E',
          300: '#E7E0EC',
          100: '#F7F7F7',
        },
        success: '#34C759',
        warning: '#FF9500',
        error: '#FF3B30',
        info: '#007AFF',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        display: ['64px', { lineHeight: '72px', fontWeight: '700' }],
        h1: ['48px', { lineHeight: '56px', fontWeight: '700' }],
        h2: ['36px', { lineHeight: '44px', fontWeight: '700' }],
        h3: ['28px', { lineHeight: '36px', fontWeight: '600' }],
        h4: ['24px', { lineHeight: '32px', fontWeight: '600' }],
        h5: ['20px', { lineHeight: '28px', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '28px', fontWeight: '400' }],
        body: ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '20px', fontWeight: '400' }],
        caption: ['12px', { lineHeight: '16px', fontWeight: '400' }],
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        '2xl': '48px',
        '3xl': '64px',
        '4xl': '96px',
      },
      maxWidth: {
        container: '1440px',
      },
      borderRadius: {
        button: '8px',
        card: '12px',
        player: '16px',
      },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,0.1)',
        'card-hover': '0 4px 12px rgba(0,0,0,0.15)',
        player: '0 8px 24px rgba(0,0,0,0.2)',
      },
    },
  },
  plugins: [],
};
