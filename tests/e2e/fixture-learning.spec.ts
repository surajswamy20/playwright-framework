import { emptyPassword } from "../../data/loginData"
import { mytest,expect} from "../../fixtures/learningFixtures"
import { LearningLoginPage } from "../../pages/LearningLoginPage"

mytest("sucessful login using our fixture", async({page,learningLogin})=>{
    console.log("2.test started")
    await learningLogin.open()
    await learningLogin.login("standard_user", "secret_sauce")
    await expect(page).toHaveURL(/\/inventory\.html$/)
})

mytest("cvcf", async({page,learningLogin})=>{
   await learningLogin.open()
   await learningLogin.login("standard_user", "wrong_password")
    await expect(page.getByText("Username and password do not match")).toBeVisible()

})

mytest("login adn add backpack using two fixtures", async({page,learningLogin,learningProduct})=>
{
    await learningLogin.open()
    await learningLogin.login("standard_user", "secret_sauce")
    await expect(page).toHaveURL(/\/inventory\.html$/)
    await expect(learningProduct.title).toHaveText("Products")
    await learningProduct.addbackpack()
    await expect(learningProduct.cartbadge).toHaveText("1")
})