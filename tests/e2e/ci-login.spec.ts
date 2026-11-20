import { mytest, expect } from "../../fixtures/learningFixtures";

mytest("ci login with secrets", async({page})=>{
    const usernmae = process.env.SAUCE_USERNAME
    const password = process.env.SAUCE_PASSWORD
    if(!usernmae || !password){
        throw new Error("SAUCE_USERNAME and SAUCE_PASSWORD are required")
            }
    await page.goto("/")
    await page.getByPlaceholder("username").fill(usernmae)
    await page.getByPlaceholder("Password").fill(password)
    await page.getByRole("button", {name : "Login", exact : true}).click()

    await expect(page).toHaveURL(/\/inventory\.html$/)
    await expect(page.getByText("Products", {exact:true})).toBeVisible()
})