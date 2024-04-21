import '@monorepo/ui-svelte/styles';
import App from './App.svelte';

const target = document.getElementById('app');
if (!target) throw new Error("Element with id 'app' not found in base html.");

const app = new App({
  target,
  intro: true
});

export default app;
