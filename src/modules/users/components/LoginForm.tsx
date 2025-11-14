import { useState, type FormEvent } from "react"
import type { LoginFormProps } from "../types/User";

export default function LoginForm({onSubmit}: LoginFormProps) {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        onSubmit(email, password)
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>

            <div>
                <label>Email</label>
                <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div>
                <label>Password</label>
                <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <button type="submit">Login</button>
        </form>
    )
}