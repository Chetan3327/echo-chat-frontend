import React from 'react'
import { FaPlus } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
const NavBar = () => {
  return (
    <div className='bg-primary flex justify-between p-3 px-5 rounded-lg items-center'>
        <h4 className='font-semibold text-2xl'>Chats</h4>
        <div className='flex gap-4 items-center'>
          <button className='flex items-center gap-3 bg-accent px-4 p-2 rounded-md'><FaPlus /> New Chat</button>
          <span className=' cursor-pointer'>
            <IoMdNotificationsOutline size={25} />
          </span>
          <span className='text-accent cursor-pointer'>
            <CgProfile size={25} />
          </span>
        </div>
    </div>
  )
}

export default NavBar
