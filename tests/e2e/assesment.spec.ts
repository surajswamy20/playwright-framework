

import { mytest, expect } from "../../fixtures/learningFixtures"
interface LoginCredentials{
    username : string
    password : string
}

const userobj : LoginCredentials={
    username :"standard_user",
    password : "secret_sauce"
}

const emptypassobjt : LoginCredentials={
    username :"standard_user",
    password : ""
}

mytest("valid login and add backpack", async({page,learningLogin,learningProduct})=>{
    mytest.setTimeout(45000)   
    await learningLogin.open()
        await learningLogin.login(userobj.username, userobj.password)
        await expect (page).toHaveURL(/\/inventory\.html$/)
        await expect (learningProduct.title).toHaveText("Products",{timeout:10000})
        
        await learningProduct.addbackpack()
        await expect (learningProduct.cartbadge).toHaveText("1")
})

mytest("empty password is rejected", async({page, learningLogin})=>{
    await learningLogin.open()
    await learningLogin.login(emptypassobjt.username, emptypassobjt.password)
    await expect(page.getByText("Password is required")).toBeVisible()
    await expect(page).toHaveURL("https://www.saucedemo.com/")
})