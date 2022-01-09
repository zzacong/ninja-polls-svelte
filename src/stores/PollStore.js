import { writable } from 'svelte/store'

const PollStore = writable([
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
])

export default PollStore
