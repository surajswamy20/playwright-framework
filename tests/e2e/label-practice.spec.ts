import{test, expect} from "@playwright/test"
import { Page, BrowserContext } from "@playwright/test"

test("login", async({page})=>{
await page.goto("https://the-internet.herokuapp.com/login")
await page.getByLabel("Username",{exact:true}).fill("tomsmith")
await page.getByLabel("Password").fill("SuperSecretPassword!")
await page.getByRole("button", {name : "Login"}).click()
await expect(page).toHaveURL(/\/secure/)
})

test("wrong", async({page,context})=>{
await page.goto("https://the-internet.herokuapp.com/login")
await page.getByLabel("Username",{exact:true}).fill("tomsmith")
await page.getByLabel("Password").fill("wrong")
await page.getByRole("button", {name : "Login"}).click()
await expect(page.getByText("Your password is invalid!")).toBeVisible()
})