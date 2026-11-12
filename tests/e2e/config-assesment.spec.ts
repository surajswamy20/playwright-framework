import { mytest, expect} from "../../fixtures/learningFixtures";

 mytest("valid login",async({page, learningLogin, learningProduct})=>{
    await page.goto("/")
    await learningLogin.login("standard_user","secret_sauce")
    await expect(page).toHaveURL(/\/inventory\.html$/)
    await expect(learningProduct.title).toHaveText("Products")

 })

 mytest("wrong password", async({page,learningLogin})=>{
     await page.goto("/")
    await learningLogin.login("standard_user","wrong_password")
    await expect(page.getByText("Username and password do not match")).toBeVisible()
    await expect(page).toHaveURL("https://www.saucedemo.com/")

 })