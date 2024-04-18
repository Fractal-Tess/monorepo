// Theming
import defaultTheme from 'tailwindcss/defaultTheme';
import defaultDaisyTheme from 'daisyui/src/theming/themes';

// Plugins
import daisyui from 'daisyui';
import twAnimate from 'tailwindcss-animate';
import twHeroPatterns from 'tailwindcss-hero-patterns';

import type { Config } from 'tailwindcss';

const config = {
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
      }
    },
    heroPatternsOpacities: ['10'],
    heroPatterns: {
      topography: twHeroPatterns.config.theme.heroPatterns.topography
    }
  },
  daisyui: {
    themes: [
      {
        light: {
          ...defaultDaisyTheme['[data-theme=light]'],
          primary: '#45B1E8',
          secondary: '#fbbf24',
          error: '#ec223d'
        },
        dark: {
          ...defaultDaisyTheme['[data-theme=dark]'],
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
  plugins: [daisyui, twAnimate, twHeroPatterns]
} satisfies Config;

export default config;
