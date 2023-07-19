<script lang="ts">
  import '$styles';
  import { env } from '$env/dynamic/public';

  import { theme } from '$lib/stores/theme';
  import BaseHeader from '$lib/components/headers/BaseHeader.svelte';
  import { browser } from '$app/environment';
  import type { PageData } from './$types';
  export let data: PageData;

  theme.init(data.theme);

  $: {
    if (browser && $theme) {
      document.documentElement.setAttribute('data-theme', $theme);
      document.documentElement.classList.value = $theme;
    }
  }
</script>

<svelte:head>
  <meta name="description" content="SvelteKit Template" />

  <meta itemprop="name" content="SvelteKit Template" />
  <meta itemprop="description" content="SvelteKit Template" />
  <meta itemprop="image" content={`${env.PUBLIC_ORIGIN_URL}/logo.png`} />

  <meta property="og:url" content={env.PUBLIC_ORIGIN_URL} />
  <meta property="og:type" content="Website" />
  <meta property="og:title" content="SvelteKit Template" />
  <meta property="og:description" content="SvelteKit Template" />
  <meta property="og:image" content={`${env.PUBLIC_ORIGIN_URL}/logo.png`} />

  <meta name="twitter:card" content={`${env.PUBLIC_ORIGIN_URL}/logo.png`} />
  <meta name="twitter:title" content="Indecisive" />
  <meta name="twitter:description" content="SvelteKit Template" />
  <meta name="twitter:image" content={`${env.PUBLIC_ORIGIN_URL}/logo.png`} />
</svelte:head>

<div
  class="form-control min-h-screen bg-fixed heropattern-topography-black/10 dark:heropattern-topography-white/10">
  <BaseHeader />
  <main class="form-control flex-1">
    <slot />
  </main>
</div>
