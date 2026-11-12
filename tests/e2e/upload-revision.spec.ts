import { mytest, expect } from "../../fixtures/learningFixtures";
mytest("uploading", async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/upload", {waitUntil:"domcontentloaded"})
    const fileinpt = page.locator("#file-upload")
    await fileinpt.setInputFiles("data/files/upload-test.txt")

    await page.getByRole("button", {name :"Upload"}).click()

    await expect (page.getByText("File Uploaded!")).toBeVisible()
    await expect(page.locator("#uploaded-files")).toContainText("upload-test.txt") 

})