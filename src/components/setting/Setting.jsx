import React, { useContext, useState } from 'react'
import ProfileIcon from '../ProfileIcon'
import { ChatContext } from '@/context/userContext'

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

const Setting = () => {
  const {user} = useContext(ChatContext)
  return (
    <div className='bg-primary w-[30%] rounded-lg border border-primary'>
      <div className='flex gap-3 px-5 py-5 items-baseline'>
        <h3 className='font-semibold text-xl'>Profile</h3>
      </div>
      <div className='flex justify-center'>
        <ProfileIcon name={user?.name} />
      </div>
      <div>
        <SettingItem info='Name' value={user?.name} />
        <SettingItem info='Email' value={user?.email} />
      </div>
    </div>
  )
}

export default Setting
