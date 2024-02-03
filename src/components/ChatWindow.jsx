import React, { useContext } from 'react'
import ProfileIcon from './ProfileIcon'
import { Button } from './ui/button'
import { LiaCheckDoubleSolid } from "react-icons/lia";
import { IoVideocamOutline, IoCallOutline, IoCloseOutline, IoAttachOutline, IoMicOutline, IoOptionsOutline } from "react-icons/io5";
import { IoIosSend } from 'react-icons/io';
import { ChatContext } from '@/context/userContext';

const senderName = (users, user) => {
  if(users[0]._id === user._id){
    return users[1].name
  }
  return users[0].name
}

const ChatHeader = ({selectedChat, user, activeTab, setActiveTab}) => {
  const handleToggle = () => {
    console.log('object')
    if(activeTab === 'chat'){
      setActiveTab('info')
    }else{
      setActiveTab('chat')
    }
  }
  return(
    <div className='flex justify-between items-center'>

      <div className='flex gap-3 items-center px-5 py-2'>
        <ProfileIcon />
        <div className='flex flex-col'>
          <span className=''>{selectedChat.isGroupChat ? selectedChat.chatName : senderName(selectedChat.users, user)}</span>
          <span className='text-sm text-gray-300'>online</span>
        </div>
      </div>

      <div className='px-5 py-2 flex gap-5'>
        <button className='bg-[#3b3e46] p-2 px-3 rounded-md hover:bg-[#373a41] hover:duration-300'><IoVideocamOutline size={20} /></button>
        <button className='bg-[#3b3e46] p-2 px-3 rounded-md hover:bg-[#373a41] hover:duration-300'><IoCallOutline size={20} /></button>
        <button onClick={() => handleToggle()} className='bg-[#3b3e46] p-2 px-3 rounded-md hover:bg-[#373a41] hover:duration-300'>{activeTab === 'chat' ? <IoOptionsOutline size={20} /> : <IoCloseOutline size={20} />}</button>
      </div>

    </div>
  )
}

const Controls = () => {
  return (
    <div className='flex gap-2 items-center'>
      <input type="text" className="bg-primary w-full p-1.5 outline-none px-2 rounded-md" placeholder="Write message" />
      <Button variant="primary"><IoAttachOutline size={20} /></Button>
      <Button variant="primary"><IoMicOutline size={20} /></Button>
      <Button><IoIosSend size={20} /></Button>
    </div>
  )
}

const Message = () => {
  return (
    <div className='px-5 py-2 my-1 flex justify-end'>
      <div className='flex flex-col items-end gap-0'>
        <span className='bg-primary px-5 py-2 rounded-sm'>Hi. How are You?</span>
        <span className='text-sm text-gray-300 flex gap-2 items-center pl-2'>14:12 <span className='text-accent'><LiaCheckDoubleSolid /></span></span>
      </div>
    </div>
  )
}

const ChatWindow = ({activeTab, setActiveTab}) => {
  const {user, selectedChat} = useContext(ChatContext)
  return (
    <div className='bg-primary w-[80%] p-5 rounded-lg h-full flex flex-col'>
      {selectedChat ? 
      (<>
        <ChatHeader activeTab={activeTab} setActiveTab={setActiveTab} selectedChat={selectedChat} user={user} />
        <div className='bg-[#3b3e46] h-full rounded-lg p-5 flex flex-col justify-between'>
          <div className='mb-4'>
            <Message />
            <Message />
            <Message />
          </div>
          <Controls />
        </div>
      </>):
      (<div className='flex justify-center items-center h-full'>
        <img src="https://img.logoipsum.com/247.svg" alt="Logo" />
      </div>)}   
    </div>
  )
}

export default ChatWindow
