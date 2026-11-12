import{test, expect} from "@playwright/test"
import { practicelogin } from "../../pages/LoginPage"
import { productPage } from "../../pages/productPage"
import { validUser,emptyPassword } from "../../data/loginData"


test ("login using 2 poms", async({page})=>
{
    const practice = new practicelogin(page, "https://www.saucedemo.com/")
    const prodct = new productPage(page)
    await practice.open()
    await practice.demoaddcredentials(validUser.username, validUser.password)
    await expect(page).toHaveURL(/\/inventory\.html$/)
    await expect(prodct.title).toHaveText("Products")
    await prodct.addbackpack()
    await expect (prodct.cartbadge).toHaveText("1")

})

test("check empty password filed", async({page})=>{
    const obj = new practicelogin(page, "https://www.saucedemo.com/")
    await obj.open()
    await obj.demoaddcredentials(emptyPassword.username, emptyPassword.password)
    await expect(obj.errormsg).toContainText("Password is required")
})