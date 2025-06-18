describe('Ecommerce Application', async()=>{
    xit('login fail page',async()=>{

        //webdriverio 
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        await expect(browser).toHaveUrl("https://rahulshettyacademy.com/loginpagePractise/")
        console.log(await browser.getTitle())
        await expect(browser).toHaveTitle("LoginPage Practise | Rahul Shetty Academy")
        

        //CSS selector
       // await $("input[name='username").setValue("rahulshettyacademy")    //CSS selector
        //await browser.pause(3000);
      //  await $("#username").setValue("secondCSS")
       // await browser.pause(3000)

        //await $("#password").setValue("learning")
            //or
        //const password =$("input[type='password']")     
        //await password.setValue('learning')

        //await $("#signInBtn").click()
        //await browser.pause(10000);

        //Xpath 
        await $("//input[@name='username']").setValue("rahulshettyacademy")
        await browser.pause(3000)
        await $("//input[@name='password']").setValue("learning")
        await browser.pause(3000)
        await $("//input[@name='signin']").click()
        await browser.pause(4000)
        
       await browser.waitUntil(async()=>await $("#signInBtn").getAttribute('value')=== 'sign In',
    {
        timeout: 5000,
        timeoutMsg: 'error msg not showing up'
    })

    await console.log(await $(".alert-danger").getText())     //error msg


    //await expect($("p")).toHaveText("username is rahulshettyacademy and Password is learning")
 

    })

    it('login success page',async()=>{

 
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
  
        await $("input[name='username").setValue("rahulshettyacademy")   
        const password =$("input[type='password']")     
        await password.setValue('learning')
        await $("#signInBtn").click()

        // wait until checkout button is displayed 
        await $(".btn-primary").waitForExist()
        await expect(browser).toHaveUrl(expect.stringContaining("shop"))
        await expect(browser).toHaveTitle("ProtoCommerce")


    })

})
