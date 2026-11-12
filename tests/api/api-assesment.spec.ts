import { get, request } from "node:http";
import { mytest,expect } from "../../fixtures/learningFixtures";
import { stringify } from "node:querystring";
import{createitem, getitem, deleteitem}from "../../utils/apihelper"
mytest("assesmnt query user 3",async({request})=>{
    const responce = await request.get("https://jsonplaceholder.typicode.com/posts",{params:{userId:3}})
    expect (responce.status()).toBe(200)
    const body = await responce.json()
    expect(body.length).toBeGreaterThan(0)
    for(const post of body){
        expect(post.userId).toBe(3) }})


        mytest("assesment user 4", async({request})=>{
            const responce = await request.post("https://jsonplaceholder.typicode.com/posts",{data:{title:"Independent QA", body : "API coding assesment",userId:4}})
            expect(responce.status()).toBe(201);
            const body = await responce.json()
            expect(body).toMatchObject({title:"Independent QA", body : "API coding assesment",userId:4})
            expect(body).toMatchObject({id:expect.any(Number)})

        })

        mytest("assesment user 3 fields", async({request})=>{
            const responce = await request.get("https://jsonplaceholder.typicode.com/users/3")
            expect(responce.status()).toBe(200)
            const body = await responce.json()
            expect(body.id).toEqual(3)
            expect(body).toMatchObject({name:expect.any(String), email:expect.any(String)})
            expect(body).toMatchObject({address:{city:expect.any(String)}})
        })

        mytest("assesment anonymous profile", async({request})=>{
            const responce = await request.get("https://dummyjson.com/auth/me")
            expect(responce.status()).toBe(401)
            const body = await responce.json()
            expect(body.message).toEqual("Access Token is required")

        })

        mytest("assesment item lifecycle", async({request})=>{
            const item = { name: "Suraj assessment item", data: { price: 250 } }
            const create = await createitem(request,item)
            expect(create.status()).toBe(200)
            const body = await create.json()
            // console.log(body)
             const id = body.id;
            // console.log(id);

           
            try{
               const geti = await getitem(request,id)
            expect(geti.status()).toBe(200)
            const geti2 = await geti.json()
            expect(geti2).toMatchObject({name: "Suraj assessment item", data: { price: 250 }})

            }
            finally{
                  const dele = await deleteitem(request,id)
                expect(dele.status()).toBe(200)
            }

            const geti = await getitem(request, id)
            expect(geti.status()).toBe(404)
        })
