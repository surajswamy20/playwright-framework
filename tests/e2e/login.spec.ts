import{test, expect} from "../../fixtures/testFixtures"
import { LoginPage } from "../../pages/LoginPage"
import { validUser, invalidUser } from "../../data/loginData"
import { productPage } from "../../pages/productPage"



test("open saucedemo login page", async ({page, loginPage})=>{
    const productpage = new productPage(page)

    await loginPage.open()
    await loginPage.login(validUser.username,validUser.password )
    await expect(page).toHaveURL(/inventory\.html$/)
    await expect(productpage.title).toHaveText("Products")

})

test("invalid password disaplys an error", async ({page})=>{
    const loginPage = new LoginPage(page)
    await loginPage.open()
    await loginPage.login(validUser.username, invalidUser.password)
    await expect(loginPage.errorMessage).toContainText("Username and password do not match")
})
