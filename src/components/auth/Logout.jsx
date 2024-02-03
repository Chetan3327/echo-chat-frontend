import React from 'react'
import { IoLogOutOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

const Logout = ({small}) => {
    const navigate = useNavigate()
    const handleLogout = () => {
        console.log('logged out!')
        localStorage.removeItem('userInfo')
        navigate('/')
    }
    return (
        <span onClick={() => handleLogout()} className='px-5 py-3 flex gap-2 items-center cursor-pointer mt-5'><IoLogOutOutline size={20} />{!small && 'Logout'}</span>
    )
}

export default Logout
