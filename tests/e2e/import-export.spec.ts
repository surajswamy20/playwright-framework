import { loginUser } from "../../utils/importExportLogin.ts/importExportLogin"; 

import {test, expect} from "@playwright/test"

import { invalidUser, validUser } from "../../data/loginData";

test("valid login", async({page})=>{
    await page.goto("https://www.saucedemo.com/")
    await loginUser(page, validUser.username, validUser.password)
    await expect(page).toHaveURL(/\/inventory\.html$/)

})

test("invalid user", async({page})=>{
  await  page
    .goto("https://www.saucedemo.com/")
    await loginUser(page, invalidUser.username, invalidUser.password)
    await expect(page.getByText("Username and password do not match")).toBeVisible()
})

