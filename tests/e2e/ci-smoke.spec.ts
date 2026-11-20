import {mytest,expect} from "../../fixtures/learningFixtures"


mytest("ci login page smoke", async({page})=>{
    await page.goto("/")
    //await exact(page.getByRole("button", {name : "Login", exact : true}).tobeVisible()
    await expect(page.getByRole("button", {name :"Login"})).toBeVisible()
})
