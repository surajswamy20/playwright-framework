import {test as base, expect} from "@playwright/test"

import { LoginPage } from "../pages/LoginPage"

type AppFixtures={
    loginPagej : LoginPage
}

export const test = base.extend<AppFixtures>({
    loginPagej : async({page}, use)=>{
        const loginPagel = new LoginPage(page)
        await use(loginPagel)
    }
})

export{expect}
    