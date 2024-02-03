import React from 'react'
import ProfileIcon from './ProfileIcon'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { LiaCheckDoubleSolid } from "react-icons/lia";
import { LuSendHorizonal } from "react-icons/lu";

const ChatHeader = () => {
  return(
    <div className='flex justify-between items-center'>

      <div className='flex gap-5 items-center px-5 py-2'>
        <ProfileIcon />
        <div className='flex flex-col'>
          <span className=''>Chetan Chauhan</span>
          <span className='text-sm text-gray-300'>online</span>
        </div>
      </div>

      <div className='px-5 py-2 flex gap-5'>
        <button className='bg-[#3b3e46] p-2 px-3 rounded-md hover:bg-[#373a41] hover:duration-300'>call</button>
        <button className='bg-[#3b3e46] p-2 px-3 rounded-md hover:bg-[#373a41] hover:duration-300'>call</button>
        <button className='bg-[#3b3e46] p-2 px-3 rounded-md hover:bg-[#373a41] hover:duration-300'>call</button>
      </div>

    </div>
  )
}

const Controls = () => {
  return (
    <div className='flex gap-2 items-center'>
      <input type="text" className="bg-primary w-full p-1.5 outline-none px-2 rounded-md" placeholder="Write message" />
      <Button variant="primary">File</Button>
      <Button variant="primary">Audio</Button>
      <Button><LuSendHorizonal size={20} /></Button>
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

const ChatWindow = () => {
  return (
    <div className='bg-primary w-[80%] p-5 rounded-lg h-full flex flex-col'>
        <ChatHeader />
        <div className='bg-[#3b3e46] h-full rounded-lg p-5 flex flex-col justify-between'>
          <div className='mb-4'>
            <Message />
            <Message />
            <Message />
          </div>
          <Controls />
        </div>        
    </div>
  )
}

export default ChatWindow
