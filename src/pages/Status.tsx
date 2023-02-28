import { PaperPlaneRight } from "phosphor-react";
import React, { FormEvent, KeyboardEvent } from "react";
import Header from "../components/Header";
import Separator from "../components/Separator";
import Tweet from "../components/Tweet";
import './Status.css';

export default function Status() {
  const [newAnswer, setNewAnswer] = React.useState('')
  const [answers, setAnswers] = React.useState([
    'Concordo..',
    'Blz',
    'OK',
  ])

  function createNewAnswer(event: FormEvent) {
    event?.preventDefault()
    setAnswers([newAnswer, ...answers])
    setNewAnswer('')
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setAnswers([newAnswer, ...answers])
      setNewAnswer('')
    }
  }

  return (
    <main className='status'>
      <Header title='Tweet' />
      <Tweet content="Teste de twitter" />
      <Separator />
      <form onSubmit={createNewAnswer} className='answer-tweet-form'>
        <label htmlFor="tweet">
          <img src="https://github.com/cleilsonandrade.png" alt="Cleilson Andrade" />
          <textarea
            id="tweet"
            placeholder='Tweet sua resposta'
            value={newAnswer}
            onKeyDown={handleHotKeySubmit}
            onChange={({ target }) => {
              setNewAnswer(target.value)
            }}
          />
        </label>
        <button type="submit">
          <PaperPlaneRight />
          <span>Responder</span>
        </button>
      </form>
      {answers.map((answer, index) => <Tweet key={index} content={answer} />)}
    </main>
  )
}