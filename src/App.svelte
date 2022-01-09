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

  let polls = [
    {
      id: 1,
      question: 'Python or JavaScript?',
      answerA: 'Python',
      answerB: 'JavaScript',
      votesA: 9,
      votesB: 15,
    },
    {
      id: 2,
      question: 'Backend or frontend?',
      answerA: 'Backend',
      answerB: 'Frontend',
      votesA: 33,
      votesB: 23,
    },
  ]

  const handleAdd = ({ detail }) => {
    polls = [detail, ...polls]
    activeItem = CURRENT_POLL
  }

  const handleVote = ({ detail }) => {
    const { id, option } = detail
    polls = polls.map(p => {
      if (p.id !== id) return p
      if (option === 'a') return { ...p, votesA: ++p.votesA }
      if (option === 'b') return { ...p, votesB: ++p.votesB }
    })
  }
</script>

<Header />
<main>
  <Tabs {items} {activeItem} on:tabChange={handleTabChange} />

  {#if activeItem === CURRENT_POLL}
    <PollList {polls} on:vote={handleVote} />
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
