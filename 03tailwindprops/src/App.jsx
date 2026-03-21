import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/card'

function App(props) {
  const [count, setCount] = useState(0)
  let myobj = {
    username: "nilesh",
    age: 21
  }
  return (
    <>
    <h1 className='bg-green-400 text-red-950 p-6 rounded-xl' >TAILWIND TESTING</h1>
    <Card username = "Nilesh" price = "29837"/>""
    <Card username = "Arpana" />
    </>
  )
}

export default App
