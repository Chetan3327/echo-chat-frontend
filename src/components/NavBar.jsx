import React, { useContext } from 'react'
import { FaPlus } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import ProfileIcon from './ProfileIcon';
import { ChatContext } from '@/context/userContext';
import Mode from './Mode';

const NavBar = ({setActiveTab}) => {
  const {user} = useContext(ChatContext)
  return (
    <div className='bg-primary flex justify-between p-3 px-5 rounded-lg items-center'>

        <h4 className='font-semibold text-2xl'>Chats</h4>

        <div className='flex gap-7 items-center'>
          {/* <button className='flex items-center gap-3 bg-accent px-4 p-2 rounded-md'><FaPlus /> New Chat</button> */}
          <Mode />
          <span className=' cursor-pointer'>
            <IoMdNotificationsOutline size={25} />
          </span>

          {user && (<span onClick={() => setActiveTab('setting')} className='cursor-pointer flex'><ProfileIcon name={user.name} /></span>)}

        </div>

    </div>
  )
}

export default NavBar
