import React from 'react'
import Home from './components/Home'
import Show from './components/Show'
import Contact from './components/Contact'
import { Link, Routes,Route } from 'react-router-dom'
function App() {


  return (
    <div className='w-full h-screen  bg-slate-500 text-white'>
      <nav className='w-full flex items-cnter justify-center gap-10 text-2xl py-3'>
        <Link  to="/">home</Link>
        <Link to="/show">Show</Link>
        <Link to="/contact">contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/show" element={<Show />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App