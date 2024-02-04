import {createContext, useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'

export const ChatContext = createContext(null)

const ChatContextProvider = (props) => {
    const [allInfo, setAllInfo] = useState(null)
    const [user, setUser] = useState(null)
    const [token, setToken] = useState(null)
    const [selectedChat, setSelectedChat] = useState(null)
    const [chats, setChats] = useState(null)
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

    const contextValue = {allInfo, user, setUser, token, selectedChat, setSelectedChat, chats, setChats}
    return(
        <ChatContext.Provider value={contextValue}>
            {props.children}
        </ChatContext.Provider>
    )
}

export default ChatContextProvider