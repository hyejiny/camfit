import React from 'react'
import './App_.css'
import VideoChatContainer from './VideoChatContainer'

function App () {
  return (
    <div className='app_'>
      <h1>React Video Chat App</h1>
      <h2>WebRTC + Firebase</h2>
      <VideoChatContainer/>
    </div>
  )
}

export default App