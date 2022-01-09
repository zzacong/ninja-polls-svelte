<script>
  import PollStore from '../stores/PollStore'
  import PollDetails from './PollDetails.svelte'
</script>

<section class="poll-list">
  {#each $PollStore as poll (poll.id)}
    <PollDetails {poll} />
  {/each}
</section>

<style>
  .poll-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1.25rem;
  }
</style>
