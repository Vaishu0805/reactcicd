import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <img src={reactLogo} className="logo" alt="React logo" />
        <img src={reactLogo} className="logo" alt="React logo" />
      </div>
      <h1>Vite + React</h1>
      <h2>Hi This is GIT ACTION EXPERIMENT</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>Edit <code>src/App.jsx</code> and save to test HMR</p>
      </div>
    </div>
  )
}

export default App
