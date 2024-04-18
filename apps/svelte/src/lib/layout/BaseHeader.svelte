<script lang="ts">
  import { ThemeToggle } from '@monorepo/ui-svelte';
  import Fa from 'svelte-fa';
  import { faGithub } from '@fortawesome/free-brands-svg-icons';
  import { link } from 'svelte-spa-router';
  import { theme } from '$lib/stores/theme';

  // If not using tauri, you may go ahead and remove the data-tauri-drag-region attribute from the header tag
</script>

<header
  data-tauri-drag-region
  class="flex h-12 items-center justify-between bg-base-100 px-2 shadow-lg">
  <ThemeToggle currentTheme={$theme} onClick={theme.toggleTheme} class="h-8 " />

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
