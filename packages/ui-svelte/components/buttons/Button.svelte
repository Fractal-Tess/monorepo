<script lang="ts">
  let count = 0;

  function handleClick() {
    count += 1;
  }
</script>

<button class="btn" on:click={handleClick}>
  clicks: {count}
</button>
