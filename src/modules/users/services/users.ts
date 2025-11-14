import { api } from "../../../core/services/api";

export type LoginPayload = {email: string, password: string}
export type RegisterPayload = {name: string, email: string, password: string}

export async function loginRequest(loginPayload: LoginPayload) {
    const res = await api.post("/user/token/", loginPayload)
    return res.data
}

export async function registerRequest(registerPayload: RegisterPayload) {
    const res = await api.post("/user/create/", registerPayload)
    return res.data
}

export async function getMe() {
    const res = await api.get("/user/me")
    return res.data
}