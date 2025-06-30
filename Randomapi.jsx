import React, { useState } from 'react'

const Randomapi = (props) => {
  const [liked, setLiked] = useState(false)

  const handleCopy = () => {
    const text = `${props.joke} - ${props.punch}`
    navigator.clipboard.writeText(text)
    alert("Joke copied to clipboard!")
  }

  return (
    <div className="container fade-in">
      <div className="card">
        <h1 className="title">Random Joke Generator App</h1>
        <h3 className="user1">😎 {props.joke}</h3>
        <h3 className="user2">🤣 {props.punch}</h3>

        <button className="like" onClick={() => setLiked(!liked)}>
          {liked ? "❤️ Liked" : "🤍 Like"}
        </button>

        <button className="copy" onClick={handleCopy}>
          📋 Copy Joke
        </button>
      </div>
    </div>
  )
}

export default Randomapi
