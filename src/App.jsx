import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Element1 from './elements/Element1'
import Element6 from './elements/Element6'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Element1/>
      <Element6/>
    </>
  )
}

export default App
