import {createContext, useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'

export const ChatContext = createContext(null)

const ChatContextProvider = (props) => {
    const [user, setUser] = useState(null)
    const [token, setToken] = useState(null)
    const navigate = useNavigate()
    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem('userInfo'))
        setUser(userInfo?.user)
        setToken(userInfo?.token)

        if(!userInfo){
            navigate('/')
        }
    }, [navigate])

    const contextValue = {user, setUser, token}
    return(
        <ChatContext.Provider value={contextValue}>
            {props.children}
        </ChatContext.Provider>
    )
}

export default ChatContextProvider