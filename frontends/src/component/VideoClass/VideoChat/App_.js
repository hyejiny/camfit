import React from 'react'
import './App_.css'
import VideoChatContainer from './VideoChatContainer'

function App_ () {
  return (
    <div className='app_ body'>
      <h1 className='h1'>React Video Chat App</h1>
      <h2>WebRTC + Firebase</h2>
      <VideoChatContainer/>
    </div>
  )
}

export default App_