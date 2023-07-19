import type { LayoutServerLoad } from './$types';

export const load = (({ locals: { theme } }) => {
  return {
    theme
  };
}) satisfies LayoutServerLoad;
