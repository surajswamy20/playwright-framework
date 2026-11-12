//src="/frame-includes/iframe-interactive.html"
import { mytest, expect } from "../../fixtures/learningFixtures";

mytest("iframing", async({page})=>{
    await page.goto("https://testpages.eviltester.com/pages/embedded-pages/iframes/", {waitUntil:"domcontentloaded"})

    const interactive = page.frameLocator('iframe[src*="iframe-interactive"]')
    const total = interactive.getByLabel("Total Value:")
    const amout =interactive.locator("#incField")

    await total.fill("12");
    await amout
    .fill("8")
    await interactive.getByRole("button", {name:"Add Amount"}).click()
    await expect(total).toHaveValue("20")
await interactive.getByRole("button", {name:"Add Amount"}).click()
    await expect(total).toHaveValue("28")


})