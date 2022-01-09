<script>
  export let polls
</script>

<section class="poll-list">
  {#each polls as poll (poll.id)}
    <article>{poll.question}</article>
  {/each}
</section>

<style>
  .poll-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1.25rem;
  }
</style>
