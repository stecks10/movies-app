import { useState } from 'react'
import './App.css'

const Card = ({ title }) => {
  const [hasLiked, setHasLiked] = useState(false);

  return (
    <div className='card'>
      <h2>{title}</h2>
      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? '❤️' : '🤍'}
      </button>
    </div>
  )
}

export default function App() {
  return (
    <div className="card-container">
      <Card title="Card 1" />
      <Card title="Card 2" />
      <Card title="Card 3" />
    </div>
  )
}
