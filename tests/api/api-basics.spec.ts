import { mytest, expect } from "../../fixtures/learningFixtures";

mytest("get one post returns sucess", async({request})=>
    
{    const reponce =await request.get(
        "https://jsonplaceholder.typicode.com/posts/1"
    )
    expect (reponce.status()).toBe(200)

    const body = await reponce.json()
     expect(body.id).toBe(1)
console.log("-------------------------x---------------------------")

})

mytest("owntest", async({request})=>{
    const responce = await request.get("https://jsonplaceholder.typicode.com/users/1")

     expect ( responce.status()).toBe(200)

     const body= await responce.json()

     expect(body.id).toBe(1)
     
})

mytest("learning posting", async({request})=>{
    const postdata={
        userId :1,
        
        title : "api practice",
        body : "learning post"
    }
    const responce = await request.post("https://jsonplaceholder.typicode.com/posts",{data:postdata})

    expect (responce.status()).toBe(201)

    const body =await  responce.json()

    console.log(body)
    console.log("---------x------------")
    expect (body.title).toBe(postdata.title)
})

mytest("second post", async({request})=>{
    const userdata={
        title : "Suraj QA",
        userId : 2
            }
    const responce = await request.post("https://jsonplaceholder.typicode.com/posts",{data:userdata})

    const body = await responce.json()

    expect (responce.status()).toBe(201)

     expect(body.title).toBe(userdata.title)
     expect(body.userId).toBe(userdata.userId)
     console.log(body.id)
})

mytest("put updated post 1", async({request})=>{
    const updatedpost={
        title:"updated QA title",
        body:"updated content",
        userId :1
    }
    const responce = await request.put("https://jsonplaceholder.typicode.com/posts/1",{data:updatedpost})

    expect (responce.status()).toBe(200)

    const result = await responce.json()
    expect(result.id).toBe(1)
    expect(result.title).toBe(updatedpost.title)
    expect(result.body).toBe(updatedpost.body)
    expect(result.userId).toBe(updatedpost.userId)
})

mytest("put request 2", async({request})=>{

    const userupdate={
        title : "Suraj Put practice",
        body : "updated post content",
        userId : 1    }

    const responce = await request.put("https://jsonplaceholder.typicode.com/posts/2", {data : userupdate})
    expect (responce.status()).toBe(200)

    const tobody = await responce.json()
    expect(tobody.id).toBe(2)
    expect(tobody.title).toBe(userupdate.title)
    expect(tobody.body).toBe(userupdate.body)
    expect(tobody.userId).toBe(userupdate.userId)
})

mytest("practice patch", async({request})=>{
const changes = {
    title : "Updated using patch"
}
const responce = await request.patch("https://jsonplaceholder.typicode.com/posts/1", {data:changes})

expect(responce.status()).toBe(200)

const body = await responce.json()

expect(body.id).toBe(1)

expect(body.title).toBe(changes.title)
    
})

mytest("patch practice 2", async({request})=>{
    const user = {
        body : "Patch changed the content"
    }
    const responce = await request.patch("https://jsonplaceholder.typicode.com/posts/2",{data : user})

    expect(responce.status()).toBe(200)
    const body = await responce.json()
    expect(body.id).toBe(2)
    expect(body.body).toBe(user.body)

})

mytest("delete request", async({request})=>{

    const responce = await request.delete("https://jsonplaceholder.typicode.com/posts/1")

    expect(responce.status()).toBe(200)

    const result = await responce.json()
    console.log(result)
    expect(result).toEqual({})
})

mytest("delete practice 2", async({request})=>{
    const responce = await request.delete("https://jsonplaceholder.typicode.com/posts/2")

    expect (responce.status()).toBe(200)
    const result = await responce.json()
    expect(result).toEqual({})
})

mytest("query", async({request})=>{

    const responce = await request.get("https://jsonplaceholder.typicode.com/posts",{params:{userId:1}})
    expect (responce.status()).toBe(200)
    const post = await responce.json()
    expect(post.length).toBeGreaterThan(0)
    for(const pos of post ){
        expect(pos.userId).toBe(1)        
    }
})

mytest("query 2", async({request})=>{
    const responce = await request.get("https://jsonplaceholder.typicode.com/posts",{params:{userId:2}})
    expect (responce.status()).toBe(200)
    const post = await responce.json()
    expect(post.length).toBeGreaterThan(0)
    for(const pos of post){
        expect(pos.userId).toBe(2)
    }
    
})

mytest("header practice 1", async({request})=>{
    const responce = await request.get("https://jsonplaceholder.typicode.com/posts",{headers:{Accept:"application/json"}})

    expect(responce.status()).toBe(200)

    const readableresponce = responce.headers()["content-type"]
    expect(readableresponce).toContain("application/json")
    console.log(readableresponce)
})

mytest("header practice 2", async({request})=>{
    const responce = await request.get("https://jsonplaceholder.typicode.com/posts/2",{headers:{Accept:"application/json"}})
    expect(responce.status()).toBe(200)

    const result = responce.headers()["content-type"]
    expect(result).toContain("application/json")
   
})

mytest("Automation excercise", async({page})=>{
    await page.goto("https://automationexercise.com/")
    expect(page).toHaveURL("https://automationexercise.com/")
    await page.getByText(" Signup / Login").click()
    expect(page.getByText("New User Signup!")).toBeVisible()
    await page.getByPlaceholder("Name").fill("suri")
    await page.locator('//*[@data-qa="signup-email"]').fill("suri@gmail.com")
    await page.getByRole("button", {name : "Signup"}).click({timeout:2000})
    expect(page.getByPlaceholder("Name")).toHaveText("suri")
    expect(page.getByPlaceholder("Name")).toBeVisible()
    console.log(expect(page.getByPlaceholder("Name")))
    expect(page.locator('//*[@data-qa="signup-email"]')).toHaveText("suri@gmail.com")
    expect(page.locator('//*[@data-qa="signup-email"]')).toBeVisible()
    console.log(expect(page.getByPlaceholder("Email Address")))
    expect(page.getByText("ENTER ACCOUNT INFORMATION")).toBeVisible()
    await page.getByRole("radio", {name : "Mr."}).click()




})

mytest("objectmatch", async({request})=>{
    const responce = await request.get("https://jsonplaceholder.typicode.com/posts/1")

    expect (responce.status()).toBe(200)

    const body = await responce.json()
    console.log(body)

    expect(body).toMatchObject({id:1, userId:1})
})

mytest("json object 2", async({request})=>{
    const responce = await request.get("https://jsonplaceholder.typicode.com/posts/2")
    expect(responce.status()).toBe(200)
    const body = await responce.json()

    expect(body).toMatchObject({id:2, userId:1})

})

mytest("nested objects", async({request})=>{
    const responce = await request.get("https://jsonplaceholder.typicode.com/users/1")

    expect(responce.status()).toBe(200)

    const body = await responce.json()

    expect(body).toMatchObject({id:1,address:{city:"Gwenborough"}})
})

mytest("nested json 2", async({request})=>
{
    const responce = await request.get("https://jsonplaceholder.typicode.com/users/2")
    expect(responce.status()).toBe(200)
    const jsonparsing= await responce.json()
    expect(jsonparsing).toMatchObject({id:2, address:{city:"Wisokyburgh"}})
})

mytest("array json 1", async({request})=>{
    const responce = await request.get("https://jsonplaceholder.typicode.com/posts",{params:{userId:1}})
    
    expect(responce.status()).toBe(200)

    const body = await responce.json()

    expect(body).toEqual(expect.arrayContaining([expect.objectContaining({id:1, userId:1})]))

    
})

mytest("array json 2", async({request})=>{
    const responce = await request.get("https://jsonplaceholder.typicode.com/posts",{params:{userId:2}})
    expect (responce.status()).toBe(200)
    const body = await responce.json()
    expect (body).toEqual(expect.arrayContaining([expect.objectContaining({id:11, userId:2})]))
})

mytest("field types 1", async({request})=>{
    const responce = await request.get("https://jsonplaceholder.typicode.com/posts/1")
    expect (responce.status()).toBe(200)
    const post = await responce.json()
    expect(post).toMatchObject({id:expect.any(Number),userId:expect.any(Number),title:expect.any(String),body:expect.any(String)})
})

mytest("field types 2", async({request})=>{
    const responce = await request.get("https://jsonplaceholder.typicode.com/users/2")

    expect(responce.status()).toBe(200)

    const post =await responce.json()
    expect(post).toMatchObject({id:expect.any(Number),name:expect.any(String), email:expect.any(String), address:{city:expect.any(String)}})
})

mytest("post not found", async({request})=>{
    const responce = await request.get("https://jsonplaceholder.typicode.com/posts/99999")

    expect(responce.status()).toBe(404)

    const body = await responce.json()
    expect(body).toEqual({})
    console.log("body output"+body)

})

