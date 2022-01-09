<script>
  import { createEventDispatcher } from 'svelte'
  import Button from '../shared/Button.svelte'

  const dispatch = createEventDispatcher()

  let fields = { question: '', answerA: '', answerB: '' }
  let errors = { question: '', answerA: '', answerB: '' }
  let isValid = false

  const handleSubmit = () => {
    isValid = true
    if (fields.question.trim().length < 5) {
      isValid = false
      errors.question = 'Question must be at least 5 characters long.'
    } else {
      errors.question = ''
    }

    if (fields.answerA.trim().length < 1) {
      isValid = false
      errors.answerA = 'Answer A cannot be empty.'
    } else {
      errors.answerA = ''
    }

    if (fields.answerB.trim().length < 1) {
      isValid = false
      errors.answerB = 'Answer B cannot be empty.'
    } else {
      errors.answerB = ''
    }

    if (!isValid) return

    // valid, add new poll

    dispatch('add', {
      ...fields,
      votesA: 0,
      votesB: 0,
      id: Math.floor(Math.random() * 100),
    })
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <div class="form-field">
    <label for="question">Poll Question:</label>
    <input type="text" id="question" bind:value={fields.question} />
    <div class="error">{errors.question}</div>
  </div>

  <div class="form-field">
    <label for="answer-a">Answer A:</label>
    <input type="text" id="answer-a" bind:value={fields.answerA} />
    <div class="error">{errors.answerA}</div>
  </div>

  <div class="form-field">
    <label for="answer-b">Answer B:</label>
    <input type="text" id="answer-b" bind:value={fields.answerB} />
    <div class="error">{errors.answerB}</div>
  </div>

  <Button type="secondary" flat>Add poll</Button>
</form>

<style>
  form {
    width: 400px;
    margin: 0 auto;
    text-align: center;
  }

  .form-field {
    margin: 1.2rem auto;
  }

  input {
    width: 100%;
    border-radius: 6px;
  }

  label {
    margin: 10px auto;
    text-align: left;
  }

  .error {
    color: crimson;
    font-size: 14px;
  }
</style>
