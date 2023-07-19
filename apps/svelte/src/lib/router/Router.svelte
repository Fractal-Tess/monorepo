<script lang="ts">
  import Router from 'svelte-spa-router';

  import Index from '$lib/router/routes/Index.svelte';

  const routes = {
    '/': Index
  };
</script>

<Router {routes} />
