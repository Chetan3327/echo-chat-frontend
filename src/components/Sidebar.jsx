import React from 'react'
import { CiLogout } from "react-icons/ci";
import ProfileIcon from './ProfileIcon';

const SideBarItem = ({active}) => {
  return <span className={`${active ? 'border-l-4' : ''} px-5 py-3 flex gap-3 items-center cursor-pointer hover:bg-gray-900 hover:duration-300`}><CiLogout />Logout</span>
}

const SideBarTitle = () => {
  return(
    <div className='px-5 flex gap-4 py-10'>
      <ProfileIcon />
      <span className='font-semibold'>Hi, Rona Zepri</span>
    </div>
  )
}

const Sidebar = () => {
  return (
    <div className='flex flex-col bg-primary w-[20vw] rounded-lg justify-between'>
      <div>
        <SideBarTitle />
        <SideBarItem active={true} />
        <SideBarItem />
        <SideBarItem />
        <SideBarItem />
      </div>
      <div className='pb-5'>
        <span className='px-5 py-3 flex gap-2 items-center cursor-pointer'><CiLogout />Logout</span>
      </div>
    </div>
  )
}

export default Sidebar
