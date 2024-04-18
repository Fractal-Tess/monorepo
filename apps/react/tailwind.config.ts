import config from '@monorepo/tailwind/tailwind.config.ts';

const override = {
  ...config,
  content: [
    'src/**/*.{tsx,jsx,ts,js}',
    'index.html',
    '../../packages/ui-react/**/*.{svelte,ts,js}'
  ]
};

export default override;
