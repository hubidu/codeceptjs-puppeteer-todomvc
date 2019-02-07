Feature('Mark as completed/not completed')

Before(async (I, Todos05Page) => {
    Todos05Page.goto()
  
    Todos05Page.enterTodo('foo')
    Todos05Page.enterTodo('bar')
    Todos05Page.enterTodo('baz')
  })

/**
 * Happy Path tests
 */
Scenario('Mark todos as completed', async (I, Todos05Page) => {
  I.say('Given I have some todos')

  I.say('When I mark the first one as completed')
  await Todos05Page.markNthAsCompleted(1)

  I.say('Then I see that 2 todos are still active')
  Todos05Page.filterActive()
  Todos05Page.seeNumberOfTodos(2)

  I.say('And I see that 1 has been completed')
  Todos05Page.filterCompleted()
  Todos05Page.seeNumberOfTodos(1)

  I.saveScreenshot('mark-todos-as-completed.png')
})

Scenario('Unmark completed todos', async (I, Todos05Page) => {
    I.say('Given I have some todos')
  
    I.say('And I mark the first one as completed')
    await Todos05Page.markNthAsCompleted(1)
    await Todos05Page.unmarkNthAsCompleted(1)
  
    I.say('When I unmark the completed todo item')

    I.say('Then I see that 3 todos are still active')
    Todos05Page.filterActive()
    Todos05Page.seeNumberOfTodos(3)
  
    I.saveScreenshot('unmark-todos-as-completed.png')
})
  
Scenario('Mark all todos as completed', async (I, Todos05Page) => {
    I.say('Given I have some todos')
  
    I.say('When I mark them all as completed')
    Todos05Page.markAllAsCompleted()
  
    I.say('Then I see that all 3 are completed')
    Todos05Page.filterCompleted()
    Todos05Page.seeNumberOfTodos(3)
  
    I.saveScreenshot('mark-all-todos-as-completed.png')
})

Scenario('Clear completed todos', async (I, Todos05Page) => {
    I.say('Given I have some completed todos') 
    Todos05Page.markAllAsCompleted()
  
    I.say('When I clear all completed items')
    Todos05Page.clearCompleted()
    Todos05Page.seeNumberOfTodos(0)
  
    I.saveScreenshot('clear-completed-todos.png')
})

