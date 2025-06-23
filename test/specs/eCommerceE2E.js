const expectchai=require('chai').expect
describe('Ecommerce Application', async()=>{
    it('End to End test',async()=>{

        const products=['iphone X', 'Blackberry']
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
  
        await $("input[name='username").setValue("rahulshettyacademy")   
        const password =$("input[type='password']")     
        await password.setValue('learning')
        //await browser.pause(5000)
        await $("#signInBtn").click()

        // wait until checkout button is displayed 
       const link= await $("*=Checkout")
       //await browser.pause(5000)
        await link.waitForExist()
        const cards = await $$("div[class='card h-100']")
        for(let i=0;i< cards.length;i++)
        {
           const card = await cards[i].$("div h4 a")
           //await browser.pause(5000)
            if(products.includes(await card.getText()))
            {
                await cards[i].$(".card-footer button").click()
                //await browser.pause(5000)

            }
        }
        await link.click()
        //await browser.pause(5000)

         const productPrices=await $$("//tr//td[4]/strong")
        const sumOfProducts=(await Promise.all(await productPrices.map(async (productPrice) => parseInt((await productPrice.getText()).split(".")[1].trim())))).reduce((acc,price)=>acc+price,0)
        
         console.log(sumOfProducts)
         const TotalValue=await $("h3 strong").getText()
         const totalIntValue = parseInt(TotalValue.split(".")[1].trim())
         await expectchai(sumOfProducts).to.equal(totalIntValue)
         await $(".btn-success").click()
         await $("#country").setValue("ind")
         await $(".Ids-ellipsis").waitForExist({reverse:true})
         await $("=India").click()
         //await browser.pause(5000)
         await $("input[type='submit']").click()
         //await browser.pause(5000)
         await expect($(".alert-success")).toHaveText(expect.stringContaining("Success"))
        


    })
})
