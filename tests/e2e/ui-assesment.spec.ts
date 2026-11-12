import { waitForDebugger } from "node:inspector";
import { mytest, expect } from "../../fixtures/learningFixtures";
mytest("submit the name through a prompt dialog", async({page})=>
{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    const str= "surjQA"
   page.once("dialog", async (dialog) => {
    await dialog.accept(str);
});    
    await page.getByRole("button", {name : "Click for JS Prompt"}).click()
    await expect(page.locator("#result")).toHaveText("You entered: surjQA")
})


mytest("testing iframe", async({page})=>{
    await page.goto("https://testpages.eviltester.com/pages/embedded-pages/iframes")
    const getframe = page.frameLocator('iframe[src*="iframe-interactive"]')
    const numfield = getframe.locator("#numField");
    const totalinput = getframe.locator("#incField")
    const btn = getframe.getByRole("button", {name :"Add Amount"})
    await numfield.fill("20");
    await totalinput.fill("5")
    await btn.click()
    await expect(numfield).toHaveValue("25")
    await btn.click()
    await expect(numfield).toHaveValue("30")

})

mytest("heroku", async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/dynamic_controls")
    const txtbox= page.locator("//*[@type='text']")
    const ebt = page.getByRole("button", {name:"Enable"})
    const dbt = page.getByRole("button", {name:"Disable"})
    await expect(txtbox).toBeDisabled()
    await ebt.click()
    await expect(page.getByText("It's enabled!")).toBeVisible({timeout:10000})
    await expect(txtbox).toBeEnabled()
    await txtbox.fill("QA practice")
    await expect(txtbox).toHaveValue("QA practice")
    await dbt.click()
    await expect(page.getByText("It's disabled!"),).toBeVisible({timeout:10000})
    await expect(txtbox).toBeDisabled()})

    mytest("fileupload", async({page})=>{
        await page.goto("https://the-internet.herokuapp.com/upload")
        const selctfile = page.locator("#file-upload")
        await selctfile.setInputFiles("data/files/upload-test.txt")
        await page.getByRole("button", {name:"Upload"}).click()
        await expect (page.getByText("File Uploaded!")).toBeVisible()
        await expect(page.locator("#uploaded-files")).toHaveText("upload-test.txt")

    })

    mytest("delayedelement", async({page})=>{
        await page.goto("https://the-internet.herokuapp.com/dynamic_loading/2")
        await expect (page.getByText("Hellow World!")).toHaveCount(0)
        await page.getByRole("button", {name:"Start"}).click()
        await expect (page.getByText("Hello World!")).toBeVisible({timeout:10000})
        await expect(page.locator("#loading")).toBeHidden()


    })