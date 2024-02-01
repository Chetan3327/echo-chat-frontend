import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Chat from './pages/Chat'

const App = () => {
  return (
    <Router>
      <div className='min-h-screen text-white bg-secondary'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/chat' element={<Chat />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
