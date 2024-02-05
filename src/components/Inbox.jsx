import React, { useContext, useEffect } from 'react'
import ProfileIcon from './ProfileIcon'
import { ChatContext } from '@/context/userContext'
import axios from 'axios'

const BACKEND_URL = 'http://localhost:5000'

const senderName = (users, user) => {
  console.log(users[0]._id)
  console.log(user._id)
  if(users[0]._id === user._id){
    return users[1].name
  }
  return users[0].name
}

const ChatItem = ({chat, user, setSelectedChat, selectedChat}) => {
  const active = selectedChat ? (selectedChat._id === chat._id): false;
  const latestMessageContent = chat.latestMessage ? (chat.isGroupChat ? chat.latestMessage.sender.name + ': ' + chat.latestMessage.content : chat.latestMessage.content) : '';
  return (
    <>
      <div onClick={() => setSelectedChat(chat)} className={`${active ? 'bg-graybg': ''} flex gap-5 items-center px-5 py-3 hover:bg-[#3b3e46] hover:duration-300 cursor-pointer`}>
        <ProfileIcon />
        <div>
          <span>{chat.isGroupChat ? chat.chatName : senderName(chat.users, user)}</span>
          <p className='text-sm text-gray-300'>{latestMessageContent}</p>
        </div>
      </div>
      <hr className='h-px bg-gray-700 border-0 dark:bg-gray-700' />
    </>
  )
}

const Inbox = () => {
  const {user, token, chats, setChats, selectedChat, setSelectedChat} = useContext(ChatContext)
  const fetchChats = async () => {
    const {data} = await axios.get(`${BACKEND_URL}/api/chat`, {headers: {'Authorization' :`Bearer ${token}`}})
    setChats(data)
  }
  useEffect(() => {
    if(token) fetchChats()
  }, [token])
  return (
    <div className='bg-primary w-[30%] rounded-lg border border-primary'>

      <div className='flex gap-3 px-5 py-5 items-baseline'>
        <h3 className='font-semibold text-xl'>Inbox</h3>
        <span className='bg-destructive px-2 rounded-md text-sm'>3 New</span>
      </div>

      <div className='flex mx-5 mb-4 py-1 px-1 gap-4 justify-around items-center bg-[#282b34] text-accent'>
        <button className='w-full py-1 cursor-pointer bg-[#3b3e46] rounded-sm'>Primary</button>
        <button className='w-full py-1 cursor-pointer'>Archived</button>
      </div>

      {chats && user && 
      (<div>
        {chats.map((chat) => {
          return (<ChatItem key={chat._id} chat={chat} user={user} selectedChat={selectedChat} setSelectedChat={setSelectedChat} />)
        })}
      </div>)}
    </div>
  )
}

export default Inbox
