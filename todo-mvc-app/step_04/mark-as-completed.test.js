Feature('Mark as completed/not completed')

Before(async (I, Todos04Page) => {
    Todos04Page.goto()
})

/**
 * Happy Path tests
 */
Scenario('Mark todos as completed', async (I, Todos04Page) => {
  I.say('Given I have some todos')
  Todos04Page.enterTodo('foo')
  Todos04Page.enterTodo('bar')
  Todos04Page.enterTodo('baz')

  I.say('When I mark the first one as completed')
  await Todos04Page.markNthAsCompleted(1)

  I.say('Then I see that 2 todos are still active')
  Todos04Page.filterActive()
  Todos04Page.seeNumberOfTodos(2)

  I.say('And I see that 1 has been completed')
  Todos04Page.filterCompleted()
  Todos04Page.seeNumberOfTodos(1)

  I.saveScreenshot('mark-todos-as-completed.png')
})

Scenario('Unmark completed todos', async (I, Todos04Page) => {
    I.say('Given I have some todos')
    Todos04Page.enterTodo('foo')
    Todos04Page.enterTodo('bar')
    Todos04Page.enterTodo('baz')
  
    I.say('And I mark the first one as completed')
    await Todos04Page.markNthAsCompleted(1)
    await Todos04Page.unmarkNthAsCompleted(1)
  
    I.say('When I unmark the completed todo item')

    I.say('Then I see that 3 todos are still active')
    Todos04Page.filterActive()
    Todos04Page.seeNumberOfTodos(3)
  
    I.saveScreenshot('unmark-todos-as-completed.png')
})
  
Scenario('Mark all todos as completed', async (I, Todos04Page) => {
    I.say('Given I have some todos')
    Todos04Page.enterTodo('foo')
    Todos04Page.enterTodo('bar')
    Todos04Page.enterTodo('baz')
  
    I.say('When I mark them all as completed')
    Todos04Page.markAllAsCompleted()
  
    I.say('Then I see that all 3 are completed')
    Todos04Page.filterCompleted()
    Todos04Page.seeNumberOfTodos(3)
  
    I.saveScreenshot('mark-all-todos-as-completed.png')
})

Scenario('Clear completed todos', async (I, Todos04Page) => {
    I.say('Given I have some completed todos')
    Todos04Page.enterTodo('foo')
    Todos04Page.enterTodo('bar')
    Todos04Page.enterTodo('baz')
  
    Todos04Page.markAllAsCompleted()
  
    I.say('When I clear all completed items')
    Todos04Page.clearCompleted()
    Todos04Page.seeNumberOfTodos(0)
  
    I.saveScreenshot('clear-completed-todos.png')
})

