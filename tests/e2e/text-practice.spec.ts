import { test, expect} from "@playwright/test"
import { loginUser } from "../../utils/importExportLogin.ts/importExportLogin"
import { validUser, invalidUser } from "../../data/loginData"

test("login", async({page})=>{
     const loginbutton1 =   page.getByRole("button", {name : "Login"});

    const url1 = "https://www.saucedemo.com/"
    await page.goto(url1)
    await loginUser(page, validUser.username, validUser.password)
    
    await expect(page.locator(".title")).toHaveText("Products")
    await page.locator('[name="add-to-cart-sauce-labs-backpack"]').click()
    await page.locator('[data-test="shopping-cart-link"]').click()
    await expect(page.locator(".inventory_item_name"), ).toHaveText("Sauce Labs Backpack")
})

// test("wrong", async({page})=>{
//      const loginbutton1 =   page.getByRole("button", {name : "Login"});

//     const url1 = "https://www.saucedemo.com/"
//     await page.goto(url1)
//     await loginUser(page, invalidUser.username, invalidUser.password)
//     await loginbutton1.click()
//     const error= page.getByText("Username and password do not match")
//     await expect(error).toBeVisible()
//     const full=page.getByText("Epic sadface: Username and password do not match any user in this service")
//     await expect(full).toContainText("Username and password do not match")

// })