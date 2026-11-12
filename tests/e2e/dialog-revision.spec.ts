import { mytest, expect } from "../../fixtures/learningFixtures";
mytest("page once dialog", async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts", {waitUntil:"domcontentloaded"})
    page.once("dialog",async(page)=>{
        console.log(page.message())
        await page.accept()
    })
    await page.getByRole("button", {name:"Click for JS Alert"}).click()

    await expect(page.locator("#result")).toHaveText("You successfully clicked an alert")
})

mytest("im js alert aceept", async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts", {waitUntil:"domcontentloaded"})
    page.once("dialog",async(page)=>{
        console.log(page.message())
        await page.accept()
    })
    await page.getByRole("button", {name:"Click for JS Confirm"}).click()

    await expect(page.locator("#result")).toHaveText("You clicked: Ok")
})

mytest("im js alert dismiss", async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts", {waitUntil:"domcontentloaded"})
    page.once("dialog",async(page)=>{
        console.log(page.message())
        await page.dismiss()
    })
    await page.getByRole("button", {name:"Click for JS Confirm"}).click()

    await expect(page.locator("#result")).toHaveText("You clicked: Cancel")
})

mytest("im js alert prompt", async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts", {waitUntil:"domcontentloaded"})
    const str = "suraj"
    page.once("dialog",async(page)=>{
        console.log(page.message())
        
        await page.accept(str)
    })
    await page.getByRole("button", {name:"Click for JS Prompt"}).click()

    await expect(page.locator("#result")).toHaveText("You entered: "+str)
})

mytest("im js alert prompt dismiss", async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts", {waitUntil:"domcontentloaded"})
    const str = "suraj"
    page.once("dialog",async(page)=>{
        console.log(page.message())
        
        await page.dismiss()
    })
    await page.getByRole("button", {name:"Click for JS Prompt"}).click()

     expect(page.locator("#result")).toHaveText("You entered: null")
    })