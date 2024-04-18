import config from '@monorepo/tailwind/tailwind.config.ts';

const override = {
  ...config,
  content: [
    'src/**/*.{html,svelte,ts,js}',
    './index.html',
    '../../packages/ui-svelte/**/*.{svelte,ts,js}'
  ]
};

export default override;
