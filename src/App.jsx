import React from 'react'
import Sidebr from './Components/Sidebr'
import Player from './Components/Player'
import Display from './Components/Display'


const App = () => { 
  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
        <Sidebr/> 
        <Display/> 
      </div> 
      <Player/>
    </div>
  )
}

export default App
