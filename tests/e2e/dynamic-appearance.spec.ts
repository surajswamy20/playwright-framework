import { mytest, expect } from "../../fixtures/learningFixtures";

mytest("test", async({page})=>{
await page.goto("https://the-internet.herokuapp.com/add_remove_elements/",{waitUntil:"domcontentloaded"})
const delebutton= page.getByRole("button", {name:"Delete"})
await expect(delebutton).toHaveCount(0)
for(let i=0; i<2; i++){
await page.getByRole("button",{name:"Add Element"}).click()
}
await expect(delebutton).toHaveCount(2)
await delebutton.first().click()
await expect(delebutton).toHaveCount(1)
await delebutton.click()
await expect(delebutton).toHaveCount(0)

})