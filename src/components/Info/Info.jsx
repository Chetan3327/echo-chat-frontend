import { ChatContext } from '@/context/userContext'
import React, { useContext } from 'react'
import ProfileIcon from '../ProfileIcon'
import { IoChevronBackOutline } from 'react-icons/io5'

const SettingItem = ({info, value}) => {
  return (
    <>
      <div className='flex gap-5 items-center px-5 py-1 cursor-pointer'>
        <div>
          <span className='text-sm text-gray-100'>{info}</span>
          <p>{value}</p>
        </div>
      </div>
    </>
  )
}

const getSenderUser = (users, user) => {
  if(users[0]._id === user._id){
    return users[1]
  }
  return users[0]
}

const ChatItem = ({pic, name, email, userId, adminId}) => {
  return (
    <>
      <div className='flex items-center justify-between px-5 py-3 hover:bg-[#3b3e46] hover:duration-300 cursor-pointer'>
        <div className='flex gap-5 items-center'>
          <ProfileIcon name={name} />
          <div>
            <span>{name}</span>
            <p className='text-sm text-gray-100'>{email}</p>
          </div>
        </div>
        {userId === adminId && (<span className='text-sm text-gray-400'>Admin</span>)}
      </div>
      <hr className='h-px bg-gray-700 border-0 dark:bg-gray-700' />
    </>
  )
}

const Info = ({setActiveTab}) => {
  const {user, selectedChat} = useContext(ChatContext)
  console.log('selectedChat')
  console.log(selectedChat)
  if(selectedChat.isGroupChat){
    return(
      <div className='bg-primary w-[30%] rounded-lg border border-primary'>
        <div className='flex gap-3 px-5 py-5 items-center'>
          <button onClick={() => setActiveTab('chat')} className='bg-graybg p-1 rounded-md'><IoChevronBackOutline /></button>
          <h3 className='font-semibold text-xl'>Info</h3>
        </div>
        <div className='flex justify-center'>
          <ProfileIcon name={selectedChat?.chatName} />
        </div>
        <div>
          <SettingItem info='Name' value={selectedChat?.chatName} />
        </div>
        <div className='mt-5 border-t border-gray-700 pt-5'>
          <span className='pl-3'>Participants</span>
          {selectedChat.users.map((item) => {
            return (<ChatItem key={item._id} name={item.name} email={item.email} userId={item._id} adminId={selectedChat.groupAdmin._id} />)
          })}
        </div>
      </div>
    )
  }else{
    const otherUser = getSenderUser(selectedChat.users, user)
    return (
      <div className='bg-primary w-[30%] rounded-lg border border-primary'>
        <div className='flex gap-3 px-5 py-5 items-baseline'>
          <button onClick={() => setActiveTab('chat')} className='bg-graybg p-1 rounded-md'><IoChevronBackOutline /></button>
          <h3 className='font-semibold text-xl'>Info</h3>
        </div>
        <div className='flex justify-center'>
          <ProfileIcon name={otherUser?.name} />
        </div>
        <div>
          <SettingItem info='Name' value={otherUser?.name} />
          <SettingItem info='Email' value={otherUser?.email} />
        </div>
      </div>
    )
  }
}

export default Info
