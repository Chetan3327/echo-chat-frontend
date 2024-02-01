import React from 'react'
import Sidebar from '../components/Sidebar'
import NavBar from '../components/NavBar'
import Inbox from '../components/Inbox'
import ChatWindow from '../components/ChatWindow'
const Chat = () => {
  return (
    <div className='flex min-h-screen bg-secondary text-white p-5 gap-5'>
      <Sidebar />
      <div className='w-full flex flex-col gap-5'>
        <NavBar />
        <div className='flex w-full h-full gap-5'>
          <Inbox />
          <ChatWindow />
        </div>
      </div>
    </div>
  )
}

export default Chat
