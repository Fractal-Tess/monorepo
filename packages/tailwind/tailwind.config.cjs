const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss-hero-patterns/src/patterns')} */
const heropatterns = require('tailwindcss-hero-patterns/src/patterns')

/** @type {import('tailwindcss').Config} */
module.exports = {
  // IMPORTANT:
  // Every package that wants to use this tailwind config
  // needs to define the `content` property and tell tailwind
  // where to watch for classes

  darkMode: 'class',
  mode: 'jit',

  theme: {
    extend: {
      fontFamily: {
        sans: ['roboto', ...defaultTheme.fontFamily.sans]
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))'
      }
    },
    heroPatternsOpacities: ['10'],
    heroPatterns: {
      topography: heropatterns.topography
    }
  },

  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['[data-theme=light]'],
          primary: '#45B1E8',
          secondary: '#E8456B',
          accent: '#3AE8C4',
          '--btn-text-case': 'none'
        },
        dark: {
          ...require('daisyui/src/theming/themes')['[data-theme=black]'],
          primary: '#45B1E8',
          secondary: '#E8456B',
          accent: '#3AE8C4',
          '--btn-text-case': 'none',
          '--rounded-box': '0.2rem',
          '--rounded-btn': '0.2rem'
        }
      }
    ]
  },

  plugins: [
    require('daisyui'),
    require('@tailwindcss/line-clamp'),
    require('tailwindcss-gradients'),
    require('tailwindcss-hero-patterns')
  ]
};
