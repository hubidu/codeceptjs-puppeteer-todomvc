Feature('Mark as completed/not completed @step-06')

Before(async (I, Todos06Page) => {
    Todos06Page.goto()
  
    Todos06Page.enterTodo('foo')
    Todos06Page.enterTodo('bar')
    Todos06Page.enterTodo('baz')
  })

/**
 * Happy Path tests
 */
Scenario('Mark todos as completed', async (I, Todos06Page) => {
  I.say('Given I have some todos')

  I.say('When I mark the first one as completed')
  await Todos06Page.markNthAsCompleted(1)

  I.say('Then I see that 2 todos are still active')
  Todos06Page.filterActive()
  Todos06Page.seeNumberOfTodos(2)

  I.say('And I see that 1 has been completed')
  Todos06Page.filterCompleted()
  Todos06Page.seeNumberOfTodos(1)

  I.saveScreenshot('mark-todos-as-completed.png')
})

Scenario('Unmark completed todos', async (I, Todos06Page) => {
    I.say('Given I have some todos')
  
    I.say('And I mark the first one as completed')
    await Todos06Page.markNthAsCompleted(1)
    await Todos06Page.unmarkNthAsCompleted(1)
  
    I.say('When I unmark the completed todo item')

    I.say('Then I see that 3 todos are still active')
    Todos06Page.filterActive()
    Todos06Page.seeNumberOfTodos(3)
  
    I.saveScreenshot('unmark-todos-as-completed.png')
})
  
Scenario('Mark all todos as completed', async (I, Todos06Page) => {
    I.say('Given I have some todos')
  
    I.say('When I mark them all as completed')
    Todos06Page.markAllAsCompleted()
  
    I.say('Then I see that all 3 are completed')
    Todos06Page.filterCompleted()
    Todos06Page.seeNumberOfTodos(3)
  
    I.saveScreenshot('mark-all-todos-as-completed.png')
})

Scenario('Clear completed todos', async (I, Todos06Page) => {
    I.say('Given I have some completed todos') 
    Todos06Page.markAllAsCompleted()
  
    I.say('When I clear all completed items')
    Todos06Page.clearCompleted()
    Todos06Page.seeNumberOfTodos(0)
  
    I.saveScreenshot('clear-completed-todos.png')
})

