import { createContext, useEffect, useState } from "react"
import type { AuthContextType } from "../types/UserContext"
import type { Props } from "../types/UserContext"
import type { User } from "../types/User"
import { getMe } from "../services/users"


export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({children}: Props) {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)

    //CARGAR LA INFO INICIAL
    useEffect( () => {
        const token = localStorage.getItem("token")
        if (token) {
            getMe()
            .then((data) => setUser(data))
            .finally(() => setLoading(false))
        } else {
            setLoading(false)
        }
    }, [])

    const login = (token:string) => {
        localStorage.setItem("token", token)
        getMe().then((data) => setUser(data))
    }

    const logout = () => {
        localStorage.removeItem("token")
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ user, loading, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}