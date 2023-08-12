import type { Manifest } from 'webextension-polyfill';
import pkg from '../package.json';

const manifest: Manifest.WebExtensionManifest = {
  manifest_version: 3,
  name: pkg.displayName,
  version: pkg.version,
  description: pkg.description,
  options_ui: {
    page: 'src/pages/options/index.html'
  },
  background: {
    service_worker: 'src/pages/background/index.js',
    type: 'module'
  },
  action: {
    default_popup: 'src/pages/popup/index.html',
    default_icon: 'icon128.png'
  },
  chrome_url_overrides: {
    newtab: 'src/pages/newtab/index.html'
  },
  icons: {
    '128': 'icon128.png',
    '64': 'icon64.png',
    '32': 'icon32.png',
    '16': 'icon16.png'
  },
  permissions: ['activeTab'],
  content_scripts: [
    {
      matches: ['http://*/*', 'https://*/*', '<all_urls>'],
      js: ['src/pages/content/index.js'],
      css: ['out.css']
    }
  ],
  devtools_page: 'src/pages/devtools/index.html',
  web_accessible_resources: [
    {
      resources: ['icon16.png', 'icon32.png', 'icon64.png', 'icon128.png'],
      matches: []
    }
  ]
};

export default manifest;
