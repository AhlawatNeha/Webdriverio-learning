const expectchai=require('chai').expect
describe('Functional Testing on Application',async()=>
{
    xit('Scrolling and MouseHover',async()=>
    {
        // await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
        // await $("#mousehover").scrollIntoView()
        // //await browser.pause(3000)
        // await $("#mousehover").moveTo()
        // //await browser.pause(4000)
        // await $("=Top").click()
        // //await browser.pause(4000)
        await browser.url("https://only-testing-blog.blogspot.com/2014/09/selectable.html")
        await $("button").doubleClick()
        console.log(await browser.isAlertOpen())
        await browser.pause(4000)
        await expectchai(await browser.isAlertOpen()).to.be.true
        await expectchai(await browser.getAlertText()).to.equal("You double clicked me.. Thank You..")
        await browser.acceptAlert()

    })
    it('web table sort validation',async()=>
    {
        await browser.url("https://rahulshettyacademy.com/seleniumPractise/#/offers")
        await $("tr th:nth-child(1)").click()
        await browser.pause(4000)
        const veggiesLocators=await $$("tr td:nth-child(1)")
        await browser.pause(4000)
        const OriginalveggiesNames=await veggiesLocators.map(async veggie=> await veggie.getText())
        await browser.pause(4000)
        console.log(OriginalveggiesNames)
        veggies=await OriginalveggiesNames.slice()

        sortedVeggies=await veggies.sort()
        await browser.pause(4000)
        console.log(sortedVeggies)
        expectchai(OriginalveggiesNames).to.eql(sortedVeggies)


    })

    it('web table filter validation',async()=>
        {
            await browser.url("https://rahulshettyacademy.com/seleniumPractise/#/offers")
            $("input[type='search']").setValue("tomato")
            await browser.pause(4000)
            const veggieLocators=await $$("tr td:nth-child(1)")
           await  expect(veggieLocators).toBeElementsArrayOfSize({eq:1})
            await browser.pause(4000)
            console.log(await veggieLocators[0].getText())
            await expect(await veggieLocators[0]).toHaveText(expect.stringContaining("Tomato"))

        })

})
