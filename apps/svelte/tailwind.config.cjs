const config = require('@ps/tailwind');

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...config,
  content: ['src/**/*.{html,js,svelte,ts}']
};
