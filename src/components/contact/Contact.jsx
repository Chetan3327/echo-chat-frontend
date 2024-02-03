import React, { useContext, useState } from 'react'
import ProfileIcon from '../ProfileIcon'
import axios from 'axios'
import { ChatContext } from '@/context/userContext'

const ChatItem = ({pic, name, email}) => {
  return (
    <>
      <div className='flex gap-5 items-center px-5 py-3 hover:bg-[#3b3e46] hover:duration-300 cursor-pointer'>
        <div>
          <ProfileIcon />
        </div>
        <div>
          <span>{name}</span>
          <p className='text-sm text-gray-100'>{email}</p>
        </div>
      </div>
      <hr className='h-px bg-gray-700 border-0 dark:bg-gray-700' />
    </>
  )
}

const Contact = () => {
  const {user, token} = useContext(ChatContext)
  const [searchTerm, setSearchTerm] = useState('')
  const [userList, setUserList] = useState(null)
  const findUsers = () => {
    if(!searchTerm){
      return
    }
    axios.get(`http://localhost:5000/api/user?search=${searchTerm}`, {headers: {'Authorization' :`Bearer ${token}`}}).then((response) => {
      // console.log(response)
      setUserList(response.data)
    })
  }
  return (
    <div className='bg-primary w-[30%] rounded-lg border border-primary'>

      <div className='flex gap-3 px-5 py-5 items-baseline'>
        <h3 className='font-semibold text-xl'>Contact</h3>
        {/* <span className='bg-destructive px-2 rounded-md text-sm'>3 New</span> */}
      </div>
      <div className='w-full flex gap-2 px-3'>
        <input onChange={(e) => setSearchTerm(e.target.value)} className='w-full bg-secondary text-gray-300 outline-none p-1 rounded-md' type="text" placeholder='Enter name or email' />
        <button className='bg-accent px-4 p-1 rounded-md hover:bg-accent/90' onClick={() => findUsers()}>Search</button>
      </div>

      {/* <div className='flex mx-5 mb-4 py-1 px-1 gap-4 justify-around items-center bg-[#282b34] text-accent'>
        <button className='w-full py-1 cursor-pointer bg-[#3b3e46] rounded-sm'>Primary</button>
        <button className='w-full py-1 cursor-pointer'>Archived</button>
      </div> */}

      {userList?.length > 0 ?
      (<div className='mt-5'>
        {userList.map((item, idx) => {
          return (<ChatItem name={item.name} email={item.email} />)
        })}
      </div>):
      (<p className='flex justify-center mt-5'>{!userList ? 'Search Friends!' : 'No user found!'}</p>)}
    </div>
  )
}

export default Contact
