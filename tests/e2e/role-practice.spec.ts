import{test, expect} from "@playwright/test"
import { Page } from "@playwright/test"
import { validUser, invalidUser } from "../../data/loginData" 

const loginbutton = async(page : Page, username : string, password : string):Promise<void>=>{
 await page.getByPlaceholder("Username").fill(username)
  await page.getByPlaceholder("Password").fill(password)

}
test("login", async({page})=>{
     const loginbutton1 =   page.getByRole("button", {name : "Login"});

    const url1 = "https://www.saucedemo.com/"
    await page.goto(url1)
    await loginbutton(page, validUser.username, validUser.password)
    await loginbutton1.click()
    

await expect(page).toHaveURL(/\/inventory\.html$/)

  await page.getByRole("button", {name:"Open Menu"}).click()

await page.getByRole("button", {name :"Logout"}).click()
 
await expect(page).toHaveURL(url1)
await expect(loginbutton1).toBeVisible()
})