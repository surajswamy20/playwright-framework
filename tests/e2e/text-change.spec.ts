import test from "node:test";
import { mytest, expect } from "../../fixtures/learningFixtures";

mytest("enable and disable an input", async ({ page }) => {
    await page.goto(
        "https://the-internet.herokuapp.com/dynamic_controls",
        { waitUntil: "domcontentloaded" }
    );

    const input = page.getByRole("textbox");
    const message = page.locator("#input-example #message");
    const Ebtn = page.getByRole("button", {name:"Enable"})
    const Dbtn = page.getByRole("button", {name:"Disable"})
    const box= page.getByRole("textbox")
    const txt = page.getByText("It's Enabled!")


    // Add your steps here.
    await expect(input).toBeDisabled()
    await Ebtn.click()
    
    await expect(txt).toBeVisible()
    await expect(page.locator("//*[@type='text']")).toBeEnabled({timeout:10000})

    await Dbtn.click()
    await expect(message).toHaveText("It's disabled!")
    await expect(page.locator("//*[@type='text']")).toBeDisabled({timeout:10000})



});

mytest("hellow world", async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/dynamic_loading/2",{waitUntil:"domcontentloaded"})
    const result = page.getByRole("heading",{name:"Hello World!",exact:true})
    const btn = page.getByRole("button",{name: "Start"})
    const loading = page.locator("#loading")
    await expect(result).toHaveCount(0)
    await (btn).click()
    await expect(result).toBeVisible({timeout:10000})
    await expect(loading).toBeHidden()




})