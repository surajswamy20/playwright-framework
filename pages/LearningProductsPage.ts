import { Page, Locator} from "@playwright/test";
export class LearningProductPage{
    readonly title : Locator
    readonly addbackpackLocator : Locator
    readonly cartbadge : Locator

    constructor (page : Page){

        this.title = page.locator('[data-test="title"]')
        this.addbackpackLocator=page.locator('[data-test ="add-to-cart-sauce-labs-backpack"]')
        this.cartbadge=page.locator('[data-test="shopping-cart-badge"]')

    }
    async addbackpack():Promise<void>{
       await this.addbackpackLocator.click()
    }

}