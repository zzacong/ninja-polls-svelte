<script>
  import Header from './components/Header.svelte'
  import Footer from './components/Footer.svelte'
  import PollList from './components/PollList.svelte'
  import CreatePollForm from './components/CreatePollForm.svelte'
  import Tabs from './shared/Tabs.svelte'

  const CURRENT_POLL = 'Current polls'
  const NEW_POLL = 'New poll'

  let items = [CURRENT_POLL, NEW_POLL]
  let activeItem = CURRENT_POLL

  const handleTabChange = ({ detail }) => (activeItem = detail)
  const handleAdd = () => (activeItem = CURRENT_POLL)
</script>

<Header />
<main>
  <Tabs {items} {activeItem} on:tabChange={handleTabChange} />

  {#if activeItem === CURRENT_POLL}
    <PollList />
  {:else if activeItem === NEW_POLL}
    <CreatePollForm on:add={handleAdd} />
  {/if}
</main>
<Footer />

<style>
  main {
    max-width: 60rem;
    margin: 2.5rem auto;
  }
</style>
