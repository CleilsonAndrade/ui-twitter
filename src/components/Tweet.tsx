import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react'
import { Link } from 'react-router-dom'
import './Tweet.css'

interface TweetProps {
  content: string
}

export default function Tweet({ content }: TweetProps) {
  return (
    <Link to="/status" className='tweet'>
      <img src="https://github.com/cleilsonandrade.png" alt="Cleilson Andrade" />
      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Cleilson Andrade</strong>
          <span>@CleilsonAndrade</span>
        </div>
        <p>{content}</p>
        <div className="tweet-content-footer">
          <button type='button'>
            <ChatCircle />
            20
          </button>
          <button type='button'>
            <ArrowsClockwise />
            10
          </button>
          <button type='button'>
            <Heart />
            70
          </button>
        </div>
      </div>
    </Link>
  )
}