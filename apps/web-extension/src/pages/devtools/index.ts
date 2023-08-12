import Browser from 'webextension-polyfill';

Browser.devtools.panels
  .create('Poly Starter Dev Tools', 'icon128.png', 'src/pages/panel/index.html')
  .catch(console.error);
