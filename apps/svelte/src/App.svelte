<script lang="ts">
  import { theme } from '$lib/stores/theme';
  import Router from './Router.svelte';
  import BaseLayout from '$lib/layout/BaseLayout.svelte';

  $: {
    document.documentElement.setAttribute('data-theme', $theme);
    document.documentElement.classList.value = $theme;
  }
</script>

<BaseLayout>
  <Router />
</BaseLayout>
