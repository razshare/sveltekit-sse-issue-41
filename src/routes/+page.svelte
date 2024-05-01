<script>
  import Component from '$lib/components/Component.svelte';

  let show = true;
</script>

<button
  on:click={() => {
    show = !show;
  }}
>
  <span>Toggle</span>
</button>

{#if show}
  <Component />
{/if}
