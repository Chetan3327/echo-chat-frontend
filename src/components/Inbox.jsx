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
    <div className='bg-primary w-[30%] rounded-lg border border-primary'>

      <div className='flex gap-3 px-5 py-5 items-baseline'>
        <h3 className='font-semibold text-xl'>Inbox</h3>
        <span className='bg-destructive px-2 rounded-md text-sm'>3 New</span>
      </div>

      <div className='flex mx-5 mb-4 py-1 px-1 gap-4 justify-around items-center bg-[#282b34] text-accent'>
        <button className='w-full py-1 cursor-pointer bg-[#3b3e46] rounded-sm'>Primary</button>
        <button className='w-full py-1 cursor-pointer'>Archived</button>
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
