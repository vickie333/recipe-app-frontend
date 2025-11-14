export type User = {
    name: string,
    email: string,
    password: string
}

export type LoginFormProps = {
    onSubmit: (email: string, password: string) => void
}