import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Randomapi from './Randomjoke/Randomapi'
import './App.css'

const App = () => {
  const [data, setData] = useState(null)
  const [darkMode, setDarkMode] = useState(false)

  const getData = async () => {
    const response = await axios.get('https://official-joke-api.appspot.com/random_joke')
    console.log(response.data)
    setData(response.data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className={darkMode ? "mainbox dark" : "mainbox"}>
      {data ? (
        <Randomapi 
          joke={data.setup} 
          punch={data.punchline} 
        />
      ) : (
        <p className="loader">Loading joke...</p>
      )}

      <button className='rola' onClick={getData}>Generate new Joke</button>

      <button className='toggle' onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Switch to Light" : "Switch to Dark"}
      </button>
    </div>
  )
}

export default App
