interface User {
    token: string
}

interface UserRegisterRequest {
    email: string
    password: string
}

interface UserLoginRequest {
    email: string
    password: string
}