import './App.css'
import { useState } from 'react'
import Hero from './elements/Hero'
import Element6 from './elements/Element6'
import Navbar from './components/Navbar'
import './index.css';
import Element7 from './elements/Element7';
import LoadingScreen from './elements/Element1'
import Element3 from './elements/Element3'
import ContactUs from './elements/Contact'


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
        <Element3/>
        <Element6/>
        <Element7 />
        <ContactUs/>
        </>
      )}
    </div>
  )
}

export default App
