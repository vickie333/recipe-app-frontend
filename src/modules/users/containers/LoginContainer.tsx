import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { loginRequest } from "../services/users";
import LoginForm from "../components/LoginForm";

export default function LoginContainer() {
    const navigate = useNavigate()
    const auth = useContext(AuthContext)

    const { login } = auth

    const handleLogin = async (email:string, password: string) => {
        const res = await loginRequest({email, password})

        login(res.token)
        navigate("/profile")
    }

    return (
        <LoginForm onSubmit={handleLogin} />
    )
}