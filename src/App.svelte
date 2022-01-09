<script>
  import Header from './components/Header.svelte'
  import Footer from './components/Footer.svelte'
  import Tabs from './shared/Tabs.svelte'

  // tabs
  let items = ['Current polls', 'New poll']
  let activeItem = 'Current polls'

  const handleTabChange = ({ detail }) => {
    activeItem = detail
  }
</script>

<Header />
<main>
  <Tabs {items} {activeItem} on:tabChange={handleTabChange} />

  {#if activeItem === 'Current polls'}
    <p>Poll list component goes here</p>
  {:else if activeItem === 'New poll'}
    <p>New poll form component goes here</p>
  {/if}
</main>
<Footer />

<style>
  main {
    max-width: 60rem;
    margin: 2.5rem auto;
  }
</style>
