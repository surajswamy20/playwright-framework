import { mytest, expect } from "../../fixtures/learningFixtures"; 

mytest("retry demonstration", async({}, testInfo)=>{
    expect(testInfo.retry).toBeGreaterThan(0)
    
})