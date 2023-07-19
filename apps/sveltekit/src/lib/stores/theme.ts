import { writable } from 'svelte/store';
import type { Theme } from 'src/types';
import Cookie from 'js-cookie';
import { browser } from '$app/environment';

const ONE_YAR = 86400 * 1000 * 365; // 86400 seconds in a day, 1000 milliseconds to seconds, 365 days in a year

export const createThemeStore = () => {
  const { subscribe, update, set } = writable<Theme | null>();

  const setCookieTheme = (theme: Theme) => {
    Cookie.set('theme', theme, {
      path: '/',
      sameSite: 'Strict',
      secure: false,
      expires: new Date(new Date().getTime() + ONE_YAR)
    });
  };

  return {
    subscribe,
    toggleTheme: () => {
      update(currentTheme => {
        const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setCookieTheme(nextTheme);
        return nextTheme;
      });
    },
    init: (theme: Theme | null) => {
      if (!theme && browser) {
        theme = window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light';
        setCookieTheme(theme);
      }
      set(theme);
    }
  };
};

export const theme = createThemeStore();
