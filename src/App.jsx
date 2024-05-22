import { useState } from 'react'
import './App.css'
import DarkMode from './components/DarkMode/DarkMode'
import Header from './components/Header/Header'
import Hero from './components/Section/Hero'
import Sections from './components/Section/Sections'
import Person from './components/Person/Person'
const App = () => {
  const [dark, setDark] = useState(false)
  return (
    <div className='max-w-[1550px] mx-auto relative'>
      <div className={`${dark?'bg-[#000] text-white':'bg-[#fff] text-black'}`}>
        <Header />
        <Hero /> 
        <Sections/>
        <Person/>
      </div>
      <div className='fixed top-[85%] left-[1%]'>
        <DarkMode setDark={setDark} dark={dark} />  
      </div>
    </div>
  )
}

export default App
