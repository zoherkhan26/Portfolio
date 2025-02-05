import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Hero from './Components/Hero'
import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
      {/* <h1 className='to-slate-600 bg-black'>Hello   it's Zoher</h1> */}
   </>
    
  )
}

export default App
