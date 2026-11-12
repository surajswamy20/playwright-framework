import { mytest,expect } from "../../fixtures/learningFixtures";
import{postdata} from "../../data/apiTestData"

const testcases =[{id:1, userId:1},{id:11, userId:2}]

for(const tests of testcases){
    mytest("data driven test"+tests.id, async({request})=>{
        const responce = await request.get("https://jsonplaceholder.typicode.com/posts/"+tests.id)
        expect(responce.status()).toBe(200)
        const body =await responce.json()
        expect(body).toMatchObject(tests)
    })
}


for(const posts of postdata){
    mytest("post request"+posts.title,async({request})=>{
        const responce = await request.post("https://jsonplaceholder.typicode.com/posts",{data:posts})
        expect(responce.status()).toBe(201)
        const body = await responce.json()

        expect(body).toMatchObject(posts)

    })
}