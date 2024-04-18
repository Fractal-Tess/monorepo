import config from '@monorepo/tailwind/tailwind.config.ts';

const override = {
  ...config,
  content: [
    'src/**/*.{html,js,svelte,ts}',
    '../../packages/ui-svelte/**/*.{svelte,ts,js}'
  ]
};

export default override;
