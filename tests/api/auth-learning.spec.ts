import { mytest,expect } from "../../fixtures/learningFixtures";


mytest("login return a token", async({request})=>
{
    const responce = await request.post("https://dummyjson.com/auth/login",{data:{username:"emilys", password:"emilyspass"}})
    expect(responce.status()).toBe(200)
    const login = await responce.json()
    expect(login).toMatchObject({accessToken:expect.any(String)})
    expect(login.accessToken.length).toBeGreaterThan(0)
})

mytest("assert auth", async({request})=>{
        const responce = await request.post("https://dummyjson.com/auth/login",{data:{username:"emilys", password : "emilyspass"}})
        expect (responce.status()).toBe(200)
        const body = await responce.json()
        const profileresponce = await request.get("https://dummyjson.com/auth/me",{headers:{Authorization:"Bearer "+body.accessToken}})
        
        console.log(body)
        expect(body).toMatchObject({accessToken:expect.any(String)})
        expect(body.accessToken.length).toBeGreaterThan(0)
        expect(body.username).toEqual("emilys")
        expect(profileresponce.status()).toBe(200)
        const profile = await profileresponce.json()
        console.log(profile)
        expect(profile).toMatchObject({id:1,username : "emilys"})
})

mytest("profile without authentication", async({request})=>{
    const responce = await request.get("https://dummyjson.com/auth/me")
    expect(responce.status()).toBe(401)
    const body = await responce.json()
    expect(body).toMatchObject({message:"Access Token is required"})
})

mytest("api key header", async({request})=>{
    const apiKey ="practice-key"
    const responce = await request.get( "https://httpbin.org/headers", {headers:{"x-api-key":apiKey}})
    expect(responce.status()).toBe(200)
    const body = await responce.json()
    expect(body.headers["X-Api-Key"]).toBe(apiKey)
})

mytest("login wrong password", async({request})=>{
    const responce = await request.post("https://dummyjson.com/auth/login",{data:{username : "emilys", password :"wrong-password"}})

    expect(responce.status()).toBe(400)

    const body = await responce.json()
    expect(body).toMatchObject({message:"Invalid credentials"})
    expect(body).not.toHaveProperty("accessToken")
    console.log(body)
})

mytest("login missing password", async({request})=>{
    const responce = await request.post("https://dummyjson.com/auth/login",{data:{username : "emilys"}})

    expect(responce.status()).toBe(400)

    const body = await responce.json()
    expect(body).toMatchObject({message:"Username and password required"})
    expect(body).not.toHaveProperty("accessToken")
    console.log(body)
})