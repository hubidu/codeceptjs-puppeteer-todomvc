Feature('mock')

Scenario('mock something', async (I, Todos06Page) => {
    I.abortImages()

    Todos06Page.goto()
    Todos06Page.enterTodo('first')
    Todos06Page.enterTodo('second')
    Todos06Page.enterTodo('laaaaaaaaaaaaaaaaaaaaaaaaaast')

    I.amOnPage('http://www.check24.de')
    I.saveScreenshot('final.png')
})