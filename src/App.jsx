import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Element1 from './elements/Element1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Element1/>
    </>
  )
}

export default App
