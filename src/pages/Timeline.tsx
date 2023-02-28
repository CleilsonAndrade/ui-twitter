import React, { FormEvent, KeyboardEvent } from "react";
import Header from "../components/Header";
import Separator from "../components/Separator";
import Tweet from "../components/Tweet";
import './Timeline.css';

export default function Timeline() {
  const [newTweet, setNewTweet] = React.useState('')
  const [tweets, setTweets] = React.useState([
    '#1',
    '#2',
    '#3',
  ])

  function createNewTweet(event: FormEvent) {
    event?.preventDefault()
    setTweets([newTweet, ...tweets])
    setNewTweet('')
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setTweets([newTweet, ...tweets])
      setNewTweet('')
    }
  }

  return (
    <main className='timeline'>
      <Header title='Home' />
      <form onSubmit={createNewTweet} className='new-tweet-form'>
        <label htmlFor="tweet">
          <img src="https://github.com/cleilsonandrade.png" alt="Cleilson Andrade" />
          <textarea
            id="tweet"
            placeholder='O que está acontecendo?'
            value={newTweet}
            onKeyDown={handleHotKeySubmit}
            onChange={({ target }) => {
              setNewTweet(target.value)
            }}
          />
        </label>
        <button type="submit">Tweet</button>
      </form>
      <Separator />
      {tweets.map((tweet, index) => <Tweet key={index} content={tweet} />)}
    </main>
  )
}