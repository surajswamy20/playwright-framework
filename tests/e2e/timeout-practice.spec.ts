import { mytest, expect } from "../../fixtures/learningFixtures";

mytest("observe a local assertiontimeout", async({page})=>{
    mytest.setTimeout(30000);

    await page.goto("https://www.saucedemo.com/",{timeout:10000})

    await expect(page.getByPlaceholder("Username")).toBeVisible()

    await expect(page).toHaveURL("https://www.saucedemo.com/", {timeout:1000})
})