/** @type {import('tailwindcss-hero-patterns/src/patterns')} */
const heropatterns = require('tailwindcss-hero-patterns/src/patterns');
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['../../packages/ui/components/**/*.{ts,tsx}'],

  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        sans: ['roboto', ...defaultTheme.fontFamily.sans]
      },

      heroPatternsOpacities: ['10'],
      heroPatterns: {
        topography: heropatterns.topography
      }
    }
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['[data-theme=light]'],
          primary: '#45B1E8',
          secondary: '#fbbf24',
          error: '#ec223d'
        },
        dark: {
          ...require('daisyui/src/theming/themes')['[data-theme=dark]'],
          primary: '#45B1E8',
          secondary: '#fbbf24',
          error: '#ec223d'
        }
      }
    ],
    // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: 'dark', // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: '', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true // Shows info about daisyUI version and used config in the console when building your CSS
  },
  plugins: [
    require('tailwindcss-animate'),
    require('daisyui'),
    require('tailwindcss-gradients'),
    require('tailwindcss-hero-patterns')
  ]
};
