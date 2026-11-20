import {mytest,expect} from "../../fixtures/learningFixtures"


mytest("ci login page smoke", async({page})=>{
    await page.goto("https://www.saucedemo.com/")
    //await exact(page.getByRole("button", {name : "Login", exact : true}).tobeVisible()
    await expect(page.getByRole("button", {name :"Missing Login Button"})).toBeVisible()
})
