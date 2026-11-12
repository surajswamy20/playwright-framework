import {test, expect} from "@playwright/test"
import {Page} from "@playwright/test"
import {  } from "./revision.spec"

interface loginCredentials  {
 username : string
 password : string
}

type ResponseResult = "accepted" | "rejected"

export const validUser : loginCredentials = {
    username : "standard_user",
    password : "secret_sauce"
}
export const invalidUser : loginCredentials = {
    username : "standard_user",
    password : "wrong_password"
}

function calculatePassPercentage(passed : number, total :number):number{
    return (passed/total)*100
}

const isBuildAccepted = (percentage : number):boolean=>{
    if(percentage>=90)
        return true
    return    false
}

function calculateResponseTime (start: number, end: number): ResponseResult{
    if((end-start)<2000)
        return "accepted"
    else return "rejected"
}



const  loginUser =async(page: Page, username : string, password : string):Promise<void>=>{
   
    await page.getByPlaceholder("Username").fill(username)
    await page.getByPlaceholder("Password").fill(password)
    await page.getByRole("button", {name : "Login"}).click()

}

test("sucessful-login test", async({page})=>{
    let loginSucessful : boolean= false

    await page.goto("https://www.saucedemo.com/")

    await loginUser(page,validUser.username, validUser.password)

    await expect(page).toHaveURL(/\/inventory\.html$/)
    loginSucessful= true

})

test ("Wrong-passowrd", async({page})=>{
    await page.goto("https://www.saucedemo.com/")

    await loginUser(page,invalidUser.username, invalidUser.password)

    await expect(page.getByText("Username and password do not match")).toBeVisible()

})