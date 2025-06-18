describe('windows and frames miscellanous',async()=>
{
    it('Parent and child windows switch',async()=>
    {
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        const select=await $$("a[class='blinkingText']")
        await select[0].click()
        await browser.pause(4000)
        const handles= await browser.getWindowHandles()
        await browser.switchToWindow(handles[1])
        console.log(await $("h1").getText())
        console.log(await browser.getTitle())
        await browser.closeWindow()
        await browser.switchToWindow(handles[0])
        console.log(await browser.getTitle())
        await browser.newWindow("https://www.amazon.in")
        console.log(await browser.getTitle())
        await browser.switchWindow("https://rahulshettyacademy.com/loginpagePractise/")
        console.log(await browser.getTitle())
        await $("#username").setValue("helloswitchedback")
        await browser.pause(4000)       

    })
})