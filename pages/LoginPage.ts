


import  type {Locator, Page} from "@playwright/test"

export class LoginPage{   
    readonly usernameInput : Locator 
    readonly passwordInput :Locator
    readonly loginButton : Locator 
    readonly errorMessage  : Locator

    constructor( readonly page :Page ){ 
        this.usernameInput = page.getByPlaceholder("Username")
        this.passwordInput = page.getByPlaceholder("Password")
        this.errorMessage = page.locator('[data-test="error"]')
        this.loginButton = page.getByRole("button", {name : "Login"})
           }

    async open(): Promise<void>{
        await this.page.goto("/")
    }

    async enterusername( username : string):Promise<void>{
            await this.usernameInput.fill(username)

        }

    async enterpassword( password :string) : Promise<void>
    {
        await this.passwordInput.fill(password)
    }

    async clicklogin() : Promise<void> {
        await this.loginButton.click()
    }

    async login(username : string ,password : string): Promise<void>{
        await this.enterusername(username)
        await this.enterpassword(password)
        await this.clicklogin()
    }
}



export class practicelogin{
    //decaring properties as class properties
    readonly page : Page
   readonly url : string
   readonly username : Locator
   readonly password : Locator
   readonly login : Locator
   readonly errormsg : Locator

    constructor(page:Page, url1:string){
        //value assignment of these class properties in constructor
        this.page=page
        this.url=url1
        this.username=page.getByPlaceholder("Username")            
        this.password = page.getByPlaceholder("Password")
        this.login =  page.getByRole("button", {name:"Login"})
        this.errormsg= page.locator('[data-test="error"]')
        }

    async open():Promise<void>{
        await this.page.goto(this.url)
    }

     async fillusername(username:string):Promise<void>{
        await this.username.fill(username)
    }
     async fillpassword(password : string):Promise<void>{
        await this.password.fill(password)
    }

     async loginp():Promise<void>{
        await this.login.click()
    }

    async demoaddcredentials(username :string, password : string):Promise<void>{
        //defined method that call existing function
        await this.fillusername(username)
        await this.fillpassword(password)
        await this.loginp()
    }
}
// class Apiestcase{
//     public readonly tool : string= "playwright"
//    private readonly expectedstatus : number 

//    public constructor(expectedstatus : number){
//         this.expectedstatus=expectedstatus
//     }

//     verifysatuts(actualStatus:number) : boolean {
//         if (actualStatus=== this.expectedstatus)
//             return true
//         else return false
        
//     }

// }

// const obj = new Apiestcase( 200)

// console.log(obj.tool)
// //console.log(obj.expectedstatus)
// console.log(obj.verifysatuts(200))
// console.log(obj.verifysatuts(500))