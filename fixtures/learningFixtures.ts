import {test as r,expect} from "@playwright/test"
import { LearningLoginPage } from "../pages/LearningLoginPage"
import { LearningProductPage } from "../pages/LearningProductsPage"

type LearningFixtures = {
    learningLogin : LearningLoginPage
    learningProduct : LearningProductPage
}
export const mytest = r.extend<LearningFixtures>({learningLogin :async ({page}, us)=>
    {
        const learningLogin = new LearningLoginPage(page)
        await us(learningLogin)
            },
    learningProduct :async({page},us)=>{
        const learningProduct = new LearningProductPage(page)
        await us(learningProduct)
    },
    // learningLogin :async({page},name)=>
    //     {const learningLogin = new LearningLoginPage(page)
    //         await name(learningLogin)

    // }
})

export{expect}
