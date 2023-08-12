const config = require('@ps/tailwind/tailwind.config.cjs');
/** @type {import('tailwindcss').Config} */
module.exports = {
  ...config,

  content: [
    './**/*.{js,jsx,ts,tsx,html}',
    '../../packages/ui-react/**/*.{ts,tsx}'
  ]
};
