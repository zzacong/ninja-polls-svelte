<script>
  import { tweened } from 'svelte/motion'
  import PollStore from '../stores/PollStore.js'
  import Button from '../shared/Button.svelte'
  import Card from '../shared/Card.svelte'

  export let poll

  // reactive values
  $: totalVotes = poll.votesA + poll.votesB
  $: percentA = Math.floor((100 / totalVotes) * poll.votesA) || 0
  $: percentB = Math.floor((100 / totalVotes) * poll.votesB) || 0

  // tweened percentages
  const tweenedA = tweened(0)
  const tweenedB = tweened(0)
  $: tweenedA.set(percentA)
  $: tweenedB.set(percentB)

  const handleVote = (opt, id) => {
    PollStore.update(curr =>
      curr.map(p => {
        if (p.id !== id) return p
        if (opt === 'a') return { ...p, votesA: ++p.votesA }
        if (opt === 'b') return { ...p, votesB: ++p.votesB }
      })
    )
  }

  const handleDelete = id => {
    console.log(id, typeof id)
    PollStore.update(curr => curr.filter(p => p.id !== id))
  }
</script>

<Card>
  <div class="poll">
    <h3>{poll.question}</h3>
    <p>Total votes: {totalVotes}</p>
    <div class="answer" on:click={() => handleVote('a', poll.id)}>
      <div class="percent percent-a" style="width: {$tweenedA}%" />
      <span>{poll.answerA} ({poll.votesA})</span>
    </div>
    <div class="answer" on:click={() => handleVote('b', poll.id)}>
      <div class="percent percent-b" style="width: {$tweenedB}%" />
      <span>{poll.answerB} ({poll.votesB})</span>
    </div>
    <div class="delete">
      <Button flat on:click={() => handleDelete(poll.id)}>Delete</Button>
    </div>
  </div>
</Card>

<style>
  h3 {
    margin: 0 auto;
    color: #555;
  }

  p {
    margin-top: 6px;
    font-size: 14px;
    color: #aaa;
    margin-bottom: 30px;
  }

  .answer {
    background: #fafafa;
    cursor: pointer;
    margin: 10px auto;
    position: relative;
  }

  .answer:hover {
    opacity: 0.6;
  }

  span {
    display: inline-block;
    padding: 10px 20px;
  }

  .percent {
    height: 100%;
    position: absolute;
    box-sizing: border-box;
  }

  .percent-a {
    background: rgba(217, 27, 66, 0.2);
    border-left: 4px solid #d91b42;
  }

  .percent-b {
    background: rgba(69, 196, 150, 0.2);
    border-left: 4px solid #45c496;
  }

  .delete {
    margin-top: 1.5rem;
    text-align: center;
    font-size: 14px;
  }
</style>
