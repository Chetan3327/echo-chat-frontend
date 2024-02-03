import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:5000/api/user/login`, {email, password}).then((response) => {
            console.log(response.data)
            localStorage.setItem('userInfo', JSON.stringify(response.data))
            navigate('/chat')
        }).catch((error) => {
            console.log(error)
        })
    }
    return (
        <form className='flex flex-col gap-3 mt-5' onSubmit={(e) => handleSubmit(e)}>
            <input onChange={(e) => setEmail(e.target.value)} value={email} placeholder='Email' type="text"  className='p-1 px-3 rounded-md outline-none text-gray-900'/>
            <input onChange={(e) => setPassword(e.target.value)} value={password} placeholder='Password' type="password"  className='p-1 px-3 rounded-md outline-none text-gray-900'/>
            <button type='submit' className='bg-accent py-2 rounded-sm hover:bg-accent/90'>Login</button>
        </form>
    )
}

export default Login