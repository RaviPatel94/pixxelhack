import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Element1 from './elements/Element1'
import Element6 from './elements/Element6'
import Navbar from './components/Navbar'
import './index.css';
import TeamDirectory from './components/contactUs/TeamDirectory';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Element1/>
      <Element6/>
      <TeamDirectory />
    </>
  )
}

export default App
