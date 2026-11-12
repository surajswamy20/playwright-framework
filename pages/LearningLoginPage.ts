import { Page,Locator } from "@playwright/test";
export class LearningLoginPage{
    readonly page : Page
    readonly url :string
    readonly username : Locator
    readonly password : Locator
    readonly LoginB : Locator

    constructor (page : Page){
        this.page=page
        this.url="https://www.saucedemo.com/"
        this.username = this.page.getByPlaceholder("Username")
        this.password = this.page.getByPlaceholder("Password")
        this.LoginB = this.page.getByRole("button",{name : "Login", exact : true})
    }
    async open():Promise<void>{
       await this.page.goto("https://www.saucedemo.com/")
    }

    async fillusername(username : string):Promise<void>{
       await this.username.fill(username)
    }

    async fillpassword(password : string):Promise<void>{
        await this.password.fill(password)
    }

     loginb =async():Promise<void>=>{
       await this.LoginB.click();
    }

    async login(username : string, password : string):Promise<void>{
        
        await this.fillusername(username)
        await this.fillpassword(password)
        await this.loginb()
    }
}


const actual = "  ERROR: Invalid Username Or Password  ";
const normalized = actual.trim();

console.log(normalized.includes("invalid username or password"));
