import { ChatContext } from '@/context/userContext'
import React, { useContext } from 'react'

const ProfileIcon = ({name = 'chetan'}) => {
  const {user} = useContext(ChatContext)
  // return (<img className='cursor-pointer' src="https://avatar.iran.liara.run/public/boy?username=Ash" alt="profile" width={25} />)
  return (<span className='bg-green-600 p-1 px-3 rounded-full'>{name.toUpperCase().slice(0, 1)}</span>)
}

export default ProfileIcon