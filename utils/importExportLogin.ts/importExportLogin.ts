import{Page} from "@playwright/test"

export const loginUser = async(page:Page, username : string, password : string):Promise<void>=>{
    await page.locator('[placeholder="Username"]').fill(username)
    await page.locator('[placeholder="Password"]').fill(password)
    await page.locator("#login-button").click()

}
