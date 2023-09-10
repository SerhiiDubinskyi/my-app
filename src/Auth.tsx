import { createContext, useContext, useState } from 'react';
import { log } from 'console';
import {Login} from './pages/Login/Login'

interface User {
    name: string;
}

interface AuthContextData {
    user: User | null;
    login(username: string): void;
    logout(): void;
}
const AuthContext = createContext<AuthContextData>({} as AuthContextData)


export const AuthProvider = ({ children }:any) => {
    const [loggedUser, setLoggedUser] = useState<User>({name: ""} as User)

    const login = (username: string):void => {
        let newUser: User = { name: username }
        setLoggedUser(newUser)

    }

    const logout = ():void => {
        setLoggedUser({} as User)
    }

    let data: AuthContextData = {
        user: loggedUser,
        login: login,
        logout: logout
    }
    return (
        <AuthContext.Provider value={data}>
            {  loggedUser?.name.length  ? children : <Login />  } 
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}
