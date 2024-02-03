import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import NavBar from '../components/NavBar'
import Inbox from '../components/Inbox'
import ChatWindow from '../components/ChatWindow'
import Contact from '@/components/contact/Contact'
import Setting from '@/components/setting/Setting'
const Chat = () => {
  const [activeTab, setActiveTab] = useState('chat')
  const [small, setSmall] = useState(true)
  return (
    <div className='flex min-h-screen bg-secondary text-white p-5 gap-5'>
      <Sidebar setActiveTab={setActiveTab} activeTab={activeTab} small={small} setSmall={setSmall} />
      <div className='w-full flex flex-col gap-5'>
        <NavBar />
        <div className='flex w-full h-full gap-5'>
          {activeTab === 'chat' && (<Inbox />)}
          {activeTab === 'contact' && (<Contact setActiveTab={setActiveTab} />)}
          {activeTab === 'setting' && (<Setting />)}
          {/* <Contact /> */}
          <ChatWindow />
        </div>
      </div>
    </div>
  )
}

export default Chat
