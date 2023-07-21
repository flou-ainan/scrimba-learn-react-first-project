import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Meu cartão Digital</h1>
      <br />
      <p>By: <a href='https://github.com/flou-ainan'>Flou Ainan</a></p>
    </>
  )
}

export default App
