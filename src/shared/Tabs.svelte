<script>
  import { createEventDispatcher } from 'svelte'
  export let items, activeItem

  const dispatch = createEventDispatcher()
</script>

<div class="tabs">
  <ul>
    {#each items as item}
      <li on:click={() => dispatch('tabChange', item)}>
        <div class:active={item === activeItem}>{item}</div>
      </li>
    {/each}
  </ul>
</div>

<style>
  .tabs {
    margin-bottom: 40px;
  }

  ul {
    display: flex;
    gap: 2rem;
    justify-content: center;
    padding: 0;
    list-style-type: none;
  }

  li {
    font-size: 18px;
    color: #555;
    cursor: pointer;
  }

  .active {
    color: #d91b42;
    border-bottom: 2px solid #d91b42;
    padding-bottom: 8px;
  }
</style>
