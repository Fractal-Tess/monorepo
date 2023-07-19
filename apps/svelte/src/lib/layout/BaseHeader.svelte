<script lang="ts">
  import ThemeToggleIcon from '$lib/components/buttons/ThemeToggleIcon.svelte';
  import { theme } from '$lib/stores/theme';
  import { faGithub } from '@fortawesome/free-brands-svg-icons';
  import Fa from 'svelte-fa';
  import { link } from 'svelte-spa-router';
</script>

<header
  data-tauri-drag-region
  class="flex h-12 items-center justify-between bg-base-100 px-2 shadow-lg">
  <button
    tabindex="-1"
    on:click={theme.toggleTheme}
    class="flex items-center hover:text-secondary">
    <ThemeToggleIcon theme={$theme} />
  </button>

  <nav>
    <ul class="flex space-x-4 text-xl font-bold">
      <li>
        <a use:link href="/" class="transition-colors hover:text-secondary">
          Home
        </a>
      </li>
    </ul>
  </nav>

  <div class="flex h-full [&>*]:px-2 [&>*]:transition-all">
    <a
      target="_blank"
      href="https://github.com/Fractal-Tess/Svelte-Tauri"
      class="flex items-center hover:text-secondary"
      rel="noreferrer">
      <Fa icon={faGithub} size="lg" />
    </a>
  </div>
</header>
