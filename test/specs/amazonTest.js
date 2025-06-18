describe('Amazon home page test',async()=>{

    it('should be able to launch amazon home page',async()=>{

        await browser.url("https://www.amazon.in");

        await expect(browser).toHaveUrl("https://www.amazon.in/")
        console.log(await browser.getTitle());
        //await expect(browser).toHaveTitle("webdriverio")
       // await expect(browser).toHaveTitle(expect.stringContaining('Amazon'))
        //await browser.pause(2000);
    });

});