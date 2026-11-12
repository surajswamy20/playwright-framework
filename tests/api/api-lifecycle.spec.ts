import { stringify } from "node:querystring";
import { mytest, expect } from "../../fixtures/learningFixtures";
import{createitem, getitem, deleteitem}from "../../utils/apihelper"


mytest("item setup and cleanup", async({request})=>{
    const url = "https://api.restful-api.dev/objects"
    const item = {name:"suraj qa item", data:{price :100}}
    //const create = await request.post(url,{data:item})
    const create = await createitem(request,item)
    const created = await create.json()
    expect(created).toMatchObject({id:expect.any(String)})

    try{
        expect(create.status()).toBe(200)
        //const read = await request.get(url+"/"+created.id)
        const read = await getitem(request, created.id)
        expect(read.status()).toBe(200)
        expect(await read.json()).toMatchObject(item)
    }
    finally{
        //const remove = await request.delete(url+"/"+created.id)
        const remove = await deleteitem(request, created.id);
        expect(remove.status()).toBe(200)
        
    }
    //const afterdelete = await request.get(url+"/"+created.id)
    const afterdelete = await getitem(request, created.id);
    expect(afterdelete.status()).toBe(404)
})