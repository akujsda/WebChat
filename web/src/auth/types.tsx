export interface SignUpInput {
  name: string
  email: string
  password: string
}

export interface SignInInput {
  email: string
  password: string
}

export interface User {
    id: string
    name: string
    email: string
    password: string
}
