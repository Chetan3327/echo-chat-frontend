import React from 'react'

const Home = () => {
  return (
    <div className='flex justify-center items-center min-h-screen'>

      <div className='bg-primary p-10 w-[30vw] h-[50vh] rounded-lg'>
        <div className='flex w-full gap-3'>
          <button className='w-full px-4 p-2 bg-white text-black'>SignUp</button>
          <button className='w-full px-4 p-2 bg-accent'>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Home
