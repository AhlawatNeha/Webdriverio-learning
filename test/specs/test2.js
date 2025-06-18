describe('Webdriverio page test', async()=>{
    it('webdriverio page',async()=>{

        //webdriverio 
        await browser.url("https://webdriver.io/")
        //await expect(browser).toHaveUrl("https://webdriver.io/")
        console.log(await browser.getTitle())
        //await browser.pause(2000);
    })



})

