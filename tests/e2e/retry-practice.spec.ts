import { TIMEOUT } from "node:dns";
import { mytest, expect } from "../../fixtures/learningFixtures";



mytest("observe full-test retries", async({page,learningLogin})=>{
    await page.goto("https://www.saucedemo.com/",{timeout:10000})

    await expect(page).toHaveURL("https://www.saucedemo.com",{timeout:1000})

})