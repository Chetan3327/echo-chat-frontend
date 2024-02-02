import React from 'react'
import ProfileIcon from './ProfileIcon'

const ChatItem = () => {
  return (
    <>
      <div className='flex gap-5 items-center px-5 py-3 hover:bg-[#3b3e46] hover:duration-300 cursor-pointer'>
        <div>
          <ProfileIcon />
        </div>
        <div>
          <span>Chetan Chauhan</span>
          <p className='text-sm text-gray-100'>Hi.</p>
        </div>
      </div>
      <hr className='h-px bg-gray-700 border-0 dark:bg-gray-700' />
    </>
  )
}

const Inbox = () => {
  return (
    <div className='bg-primary w-[30%] rounded-lg'>

      <div className='flex gap-3 px-5 py-5 items-baseline'>
        <h3 className='font-semibold text-xl'>Inbox</h3>
        <span className='bg-destructive px-2 rounded-md text-sm'>3 New</span>
      </div>

      <div className='flex mx-5 mb-4 py-2 px-2 gap-4 justify-around items-center bg-[#282b34] text-accent'>
        <span className='cursor-pointer bg-[#3b3e46] px-4 rounded-sm'>Primary</span>
        <span className='cursor-pointer px-4'>Archived</span>
      </div>

      <div>
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
      </div>
    </div>
  )
}

export default Inbox
