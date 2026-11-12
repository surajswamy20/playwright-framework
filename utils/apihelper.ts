import { APIRequestContext } from "@playwright/test";

type itempaylod={
    name:String,
    data : {price:number}
}
const url = "https://api.restful-api.dev/objects"

export async function createitem(request : APIRequestContext,item : itempaylod){
    return await request.post(url,{data:item})
    }

export async function getitem(request: APIRequestContext, id: string) {
  return await request.get(url + "/" + id);
}

export async function deleteitem (request : APIRequestContext, id : String){
    return await request.delete(url+"/"+id)
}