const expectchai= require('chai').expect
describe('UI Controls test suite', async()=>{
    xit('UI Controls',async()=>{

        //webdriverio 
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        await $("input[name='username").setValue("rahulshettyacademy")   
        const password =$("input[type='password']")     
        await password.setValue('learning')

       const radioButtons = await $$(".radiotextsty")
       const userDropdown= radioButtons[1]
       await userDropdown.click()
             ///OR
   //await  (($$(".radiotextsty"))[1]).click()

       const modal=await $(".modal-body")
       await modal.waitForDisplayed()
       await $("#cancelBtn").click()
       console.log(await $$(".customradio")[0].$("span").isSelected())
       await browser.pause(4000)
       await userDropdown.click()
       await modal.waitForDisplayed()
       await $("#okayBtn").click()
       await browser.pause(4000)
             /// validate op up shown up when we select admin
             await $$(".customradio")[0].$("span").click()
             await expect(modal).not.toBeDisplayed()

             const dropdown=await $("select.form-control")
             await dropdown.selectByAttribute('value','teach')
             await browser.pause(4000)
            await dropdown.selectByVisibleText("Consultant")
            await browser.pause(4000)
            await dropdown.selectByIndex(0)
            await browser.pause(4000)
            console.log(await dropdown.getValue())
            await expectchai(await dropdown.getValue()).to.equal("stud")

             })

             xit('Dynamic dropdown Controls',async()=>{
                await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
                await $("#autocomplete").setValue("ind")
                await browser.pause(4000)
                let items= $$("[class='ui-menu-item'] div")
                for(var i=0;i<await items.length;i++)
                {
                    if(await items[i].getText() === "India")
                    {

                        await items[i].click()
                        await browser.pause(4000)
                    }
                }
                // await browser.pause(4000)
                // await browser.pause(4000)
             })

             it('checkbox identification',async()=>{
                await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
                
                const element = await $$("input[type='checkbox']")
                await element[1].click()
                await browser.pause(4000)
                
                console.log(await element[1].isSelected())
                console.log(await element[2].isSelected())
                await  browser.saveScreenshot("screenshot.png")

             })

})