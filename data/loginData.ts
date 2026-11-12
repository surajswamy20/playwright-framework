export interface LoginCredentials{
    username : string
    password : string
}

export const validUser : LoginCredentials={
    username :"standard_user",
    password : "secret_sauce"
}

export const invalidUser : LoginCredentials= {
    username : "standard_user",
    password : "wrong_password"
}
 export const emptyPassword :LoginCredentials={
    username : "standard_user",
    password : ""
 }