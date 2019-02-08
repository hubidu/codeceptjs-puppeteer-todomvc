Feature('Persist Todos')

Before(async (I, Todos06Page) => {
    Todos06Page.goto()
  
    Todos06Page.enterTodos([
        {title: 'foo', completed: false},
        {title: 'bar', completed: false},
        {title: 'baz', completed: false},
        {title: 'boom', completed: true},
    ])
  })

Scenario('Todos survive a page refresh @step-06', async (I, Todos06Page) => {
  I.say('Given I have some todos')

  I.say('When I reload the page')
  Todos06Page.refresh()

  I.say('Then I still see the same todos')
  Todos06Page.seeNumberOfTodos(4)

  I.saveScreenshot('todos-survive-page-refresh.png')
})
