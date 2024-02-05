import React, { useState } from 'react'
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md'

const Mode = () => {
  const [theme, setTheme] = useState('dark')
  const changeMode = () => {
    if(theme === 'dark'){
      setTheme('light')
    }else{
      setTheme('dark')
    }
  }
  return (
    <span onClick={() => changeMode()} className='cursor-pointer hover:bg-graybg p-2 rounded-full duration-300'>
      {theme === 'dark' ? <MdOutlineLightMode size={20} />: <MdOutlineDarkMode size={20} />}
    </span>
  )
}

export default Mode
