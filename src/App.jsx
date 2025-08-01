import './App.css'
import { useState } from 'react'
import Hero from './elements/Hero'
import Element6 from './elements/Element6'
import Navbar from './components/Navbar'
import './index.css';
import TeamDirectory from './elements/Element7';
import LoadingScreen from './elements/Element1'

function App() {
  const [isAppLoading, setIsAppLoading] = useState(true);

  return (
    <div className='bg-[#FDF6E3] text-[#5D4037]'>
      {isAppLoading && (
        <LoadingScreen onLoadingComplete={() => setIsAppLoading(false)} />
      )}
      {!isAppLoading && (
        <>
        <Navbar/>
        <Hero/>
        <Element6/>
        <TeamDirectory />
        </>
      )}
    </div>
  )
}

export default App
