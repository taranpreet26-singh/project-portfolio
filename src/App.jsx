import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import GlobeDemo from './components/GlobeDemo'
import { LampDemo } from './components/Lamp'
import VisaType from './components/VisaType'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
    <div className='absolute -top-70 left-50   2xl:top-33 2xl:-left-0 lg:top-33 lg:-left-0 md:top-20 md:left-98  xl:top-33 xl:-left-0 sm:-top-5 sm:left-80 ' >
      <GlobeDemo/>
    </div>
    <div>
      <Navbar/>
      <Main/>
      <hr className='w-[80%] m-auto text-black h-[10px]'/>
    </div>
    <div className='relative '>
      <LampDemo/>
    </div>
    <div className=''>
      <VisaType/>
    </div>

    
    </>
  )
}



export default App
