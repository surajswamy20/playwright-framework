import type {Locator, Page } from "@playwright/test"

export class productPage{
    
    readonly title : Locator 
    readonly addbackpackbutton : Locator
    readonly cartbadge : Locator

    constructor (readonly page : Page){
        this.title = page.locator(".title")
        this.addbackpackbutton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')

        this.cartbadge =page.locator('[data-test="shopping-cart-badge"]')
            }

    async addbackpack():Promise<void>{
        await this.addbackpackbutton.click()

    }
}