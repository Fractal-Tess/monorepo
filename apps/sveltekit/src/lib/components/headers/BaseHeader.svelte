<script lang="ts">
  import ThemeToggle from '$components/theme/ThemeToggle.svelte';
  import { faGithub } from '@fortawesome/free-brands-svg-icons';
  import Fa from 'svelte-fa';
</script>

<div class="flex h-20 items-center justify-between px-4">
  <a href="/" class="block h-full">
    <img
      src="/svelte.svg"
      alt="svelte logo"
      class="aspect-square h-full py-4" />
  </a>
  <nav>
    <ul
      class="flex gap-x-8 text-3xl font-bold
      [&_a:hover]:text-primary [&_a]:transition-colors">
      <li>
        <a href="/"> Home </a>
      </li>
      <li>
        <a href="/about"> About </a>
      </li>
      <li>
        <a href="/contact"> Contact </a>
      </li>
      <li />
    </ul>
  </nav>

  <div
    class="flex items-center space-x-4 [&>*:hover]:text-primary [&>*]:transition-all [&>*]:duration-300">
    <a
      href="https://github.com/Fractal-Tess/SvelteKit"
      rel="noreferrer"
      target="_blank">
      <Fa icon={faGithub} class="text-3xl" />
    </a>
    <ThemeToggle />
  </div>
</div>
