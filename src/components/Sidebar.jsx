import React, { useContext } from 'react'
import { MdOutlineExplore } from "react-icons/md";
import { IoChatbubblesOutline, IoCallOutline, IoPeopleOutline, IoSettingsOutline, IoLogOutOutline, IoChevronForward, IoChevronBackOutline } from "react-icons/io5";
import ProfileIcon from './ProfileIcon';
import Logout from './auth/Logout';
import { ChatContext } from '@/context/userContext';

const SideBarItem = ({name, icon: IconComponent, active, small, setActiveTab}) => {
  return <span onClick={() => setActiveTab(name.toLowerCase())} className={`${active ? 'border-l-4' : ''} px-5 py-3 flex gap-3 items-center cursor-pointer hover:bg-gray-900 hover:duration-300`}>{IconComponent} {small ? '' : name}</span>
}

const SideBarTitle = ({small, name="John Doe"}) => {
  return(
    <div className='px-5 flex gap-4 py-10 items-center'>
      <ProfileIcon />
      {!small && <span className='font-semibold'>Hi, {name}</span>}
    </div>
  )
}

const ToogleButton = ({small}) => {
  return(
    <div className='flex justify-end'>
      <span className='bg-[#4e515a] p-1.5 cursor-pointer text-sm rounded-md shadow-md hover:bg-[#3b3e46] hover:duration-300'>
        {small ? <IoChevronForward /> : <IoChevronBackOutline />}
      </span>
    </div>
  )
}

const SideBarItems = [
  {name: "Explore", icon: <MdOutlineExplore size={20} />, active: false},
  {name: "Chat", icon: <IoChatbubblesOutline size={20} />, active: true},
  {name: "Calls", icon: <IoCallOutline size={20} />, active: false},
  {name: "Contact", icon: <IoPeopleOutline size={20} />, active: false},
  {name: "Setting", icon: <IoSettingsOutline size={20} />, active: false},
]

const Sidebar = ({small = false, setActiveTab, activeTab}) => {
  const {user} = useContext(ChatContext)
  // console.log(user)
  return (
    <div className={`flex flex-col bg-primary ${small ? 'w-[5vw]' : 'w-[20vw]'} rounded-lg justify-between`}>
      <div>
        <SideBarTitle small={small} name={user?.name} />
        
        {SideBarItems.map((item, idx) => {
          return (<SideBarItem key={idx} small={small} name={item.name} icon={item.icon} active={item.name.toLowerCase() === activeTab} setActiveTab={setActiveTab} />)
        })}
        
      </div>
      <div className='pb-5'>
        <ToogleButton small={small} />
        <Logout small={small} />
      </div>
    </div>
  )
}

export default Sidebar
