import type { ReactNode } from "react"
import type { User } from "./User"

export type AuthContextType = {
    user: User | null,
    loading: boolean,
    login: (token:string) => void,
    logout: () => void
}

export type Props = {
    children: ReactNode
}