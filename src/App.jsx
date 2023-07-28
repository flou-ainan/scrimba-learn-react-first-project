import { useState } from 'react'
import './App.css'
import CardBody from './components/CardBody'
import CardFooter from './components/CardFooter'
import profilePic from './assets/perfil02.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='b-card'>

      <div className='profile-pic-frame'>
        <img className='profile-pic' src={profilePic} />
      </div>

      <CardBody />
      <CardFooter />
    </div>
  )
}

export default App
