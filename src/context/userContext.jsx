import {createContext, useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'

export const ChatContext = createContext(null)

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

const ChatContextProvider = (props) => {
    const [allInfo, setAllInfo] = useState(null)
    const [user, setUser] = useState(null)
    const [token, setToken] = useState(null)
    const [selectedChat, setSelectedChat] = useState(null)
    const [chats, setChats] = useState(null)
    const [smallDevice, setSmallDevice] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem('userInfo'))
        setUser(userInfo?.user)
        setToken(userInfo?.token)
        setAllInfo(userInfo)

        if(!userInfo){
            navigate('/')
        }
    }, [navigate])

    useEffect(() => {
        if (smallDevice === false && window.innerWidth < 800) {
            setSmallDevice(true)
            console.log('small device', true)
        }
        else if  (smallDevice === true && window.innerWidth >= 800){
            setSmallDevice(false)
            console.log('small device', false)
        }
    }, [])

    const contextValue = {allInfo, user, setUser, token, selectedChat, setSelectedChat, chats, setChats, BACKEND_URL, smallDevice}
    return(
        <ChatContext.Provider value={contextValue}>
            {props.children}
        </ChatContext.Provider>
    )
}

export default ChatContextProvider