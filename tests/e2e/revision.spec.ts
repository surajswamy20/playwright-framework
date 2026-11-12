import {test, expect} from "@playwright/test"
import  {Page, Locator} from "@playwright/test"
import { invalidUser, validUser } from "../../data/loginData"
import {practicelogin} from "../../pages/LoginPage"
import { productPage } from "../../pages/productPage"

// async function performLogin(page : Page,username : string,passowrd : string){
//     await page.getByPlaceholder("Username").fill(username)
//     await page.getByPlaceholder("Password").fill(passowrd)
//     await page.getByRole("button",{name : "Login"}).click()
// }

 async function autofill(page : Page, username : string, password : string){
    await page.getByPlaceholder("Username").fill(username)
    await page.getByPlaceholder("Password").fill(password)
    await page.getByRole("button", {name : "Login"}).click()

}
 interface totryo {
        username : string
        password : string
    }


test("valid user can login", async ({page})=>{

    const username : string  = "standard_user"
    const password : string = "secret_sauce"

    

    const obj :totryo= {
        username : "standard_user",
        password : "secret_sauce"
    }

    await page.goto("https://www.saucedemo.com/")

    // await page.getByPlaceholder("Username").fill(username)

    // await page.getByPlaceholder("Password").fill(password)

    // await page.getByRole("button",{name : "Login"}).click()

   // await performLogin(page,username, password);
    await selftry(page, obj.username, obj.password)


    await expect(page).toHaveURL(/\/inventory\.html$/)
})

 const selftry=async(page : Page, username : string, password : string):Promise<void>=>{
    await page.getByPlaceholder("Username").fill(username)
    await page.getByPlaceholder("Password").fill(password)
    await page.getByRole("button", {name : "Login"}).click()
}

test ("wrong password shows an error", async({page})=>
{

   
    const tryo: totryo={
        username : "standard_user",
        password : "wrong_password"
    }
    
    await page.goto("https://www.saucedemo.com/")
    await selftry(page, tryo.username, tryo.password)
    await expect (page.getByText("Username and password do not match")).toBeVisible()
})
test("wrong password shows an erroqr", async function({ page }) {
    const tryo: totryo = {
        username: "standard_user",
        password: "wrong_password"
    }
    
    await page.goto("https://www.saucedemo.com/")
    await selftry(page, tryo.username, tryo.password)
    await expect(page.getByText("Username and password do not match")).toBeVisible()
})

// export const testresult : string[] = ["passed", "failed", "passed", "failed", "passed"]
// console.log(testresult[0])
// console.log(testresult.length)
// let p : number= 0;
// let f:number=0;
// for(const result of testresult)
// {
//     if(result==="passed")
//         p++;
//     else f++

// }

// const msg : string = "ERROR: Username And Password Do Not Match"
// const modified : string = msg.trim().toLowerCase();
// const check : boolean=modified.includes("usernmae and pasword do not match")
// console.log(modified+" ")
// console.log(check)
// const msg1 : string = "SUCCESS: you are logged in"
// const modified1 : string = msg.trim().toLowerCase();
// const check1 : boolean=modified.includes("usernmae and pasword do not match")
// console.log(modified1+" ")
// console.log(check1)

// class Try {
//     testName : string
//     expectedstatus : number
     
//     constructor(testName : string, expectedstatus : number)
//     {
//         this.testName=testName,
//         this.expectedstatus=expectedstatus
//     }
//     printName(){
//         console.log(this.testName)
//    }
//     verifyStauts(actualStatus:number):boolean{
//         if(actualStatus===this.expectedstatus)
//             return true
//         else return false
//     }
    
// }



test("open login page using pom", async({page})=>
{
    const obj = new practicelogin(page,"https://www.saucedemo.com/")
   await obj.open()
   const product = new productPage(page)

   
   await  obj.demoaddcredentials(validUser.username, validUser.password)
    await expect(page).toHaveURL(/\/inventory\.html$/)
    await expect (product.title).toHaveText("Products")
})

test("wrong password using pom", async({page})=>{
    const obj = new practicelogin(page, "https://www.saucedemo.com/")
    await obj.open()
    
    await obj.demoaddcredentials(invalidUser.username, invalidUser.password)
    await expect(obj.errormsg).toContainText("Epic sadface: Username and password do not match any user in this service")
})


// const getUserTest = new Try("Verify Get user",200)
// const createUserTest= new Try("Verify Post user", 201)
// console.log(getUserTest.verifyStauts(500))
// console.log(getUserTest.verifyStauts(200))
// console.log(createUserTest.verifyStauts(201))
// console.log(createUserTest.verifyStauts(200))
// getUserTest.printName()
// createUserTest
// .printName()


//  function calculatePassedPercentage(passedTests : number, totalTest : number):number{
//  return (passedTests/totalTest)*100
// }

// const isBuildAccepted=(passPercentage : number): boolean=>{
//     if(passPercentage > 90)
//         return true
//     else return false
// }

// let result = calculatePassedPercentage(18,20)

// console.log(result,isBuildAccepted(result))

// function calculateResuponceTime(startTime : number, endtime : number): number{
// return (endtime-startTime)
// }

// const isResponsetimeAccepted=(responceTime : number): boolean =>{
//     if(responceTime>2000)
//         return true
//     else return false
// }

// const tryo = calculateResuponceTime(1000,2600)
// console.log(tryo,isResponsetimeAccepted(tryo))

// type ResponceResult = "accepted" | "rejected"

// const validateResponseTime = (responseTime : number) :ResponceResult => {
//     if(responseTime<2000)  
//         return "accepted"
//     else
//         return "rejected"
// }

// console.log(validateResponseTime(1600))