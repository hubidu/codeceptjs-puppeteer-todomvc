Feature('@only Mark as completed/not completed')

Before(async (I, Todos04_APage) => {
    Todos04_APage.goto()
})

/**
 * Happy Path tests
 */
Scenario('Mark todos as completed', async (I, Todos04_APage) => {
  I.say('Given I have some todos')
  Todos04_APage.enterTodo('foo')
  Todos04_APage.enterTodo('bar')
  Todos04_APage.enterTodo('baz')

  I.say('When I mark the first one as completed')
  Todos04_APage.markNthXpathAsCompleted(1)

  I.say('Then I see that 2 todos are still active')
  Todos04_APage.filterActive()
  Todos04_APage.seeNumberOfTodos(2)

  I.say('And I see that 1 has been completed')
  Todos04_APage.filterCompleted()
  Todos04_APage.seeNumberOfTodos(1)

  I.saveScreenshot('mark-todos-as-completed.png')
})

Scenario('Unmark completed todos', async (I, Todos04_APage) => {
    I.say('Given I have some todos')
    Todos04_APage.enterTodo('foo')
    Todos04_APage.enterTodo('bar')
    Todos04_APage.enterTodo('baz')
  
    I.say('And I mark the first one as completed')
    Todos04_APage.markNthXpathAsCompleted(1)
    Todos04_APage.unmarkNthXpathAsCompleted(1)
  
    I.say('When I unmark the completed todo item')

    I.say('Then I see that 3 todos are still active')
    Todos04_APage.filterActive()
    Todos04_APage.seeNumberOfTodos(3)
  
    I.saveScreenshot('unmark-todos-as-completed.png')
})
  
Scenario('Mark all todos as completed', async (I, Todos04_APage) => {
    I.say('Given I have some todos')
    Todos04_APage.enterTodo('foo')
    Todos04_APage.enterTodo('bar')
    Todos04_APage.enterTodo('baz')
  
    I.say('When I mark them all as completed')
    Todos04_APage.markAllAsCompleted()
  
    I.say('Then I see that all 3 are completed')
    Todos04_APage.filterCompleted()
    Todos04_APage.seeNumberOfTodos(3)
  
    I.saveScreenshot('mark-all-todos-as-completed.png')
})

Scenario('Clear completed todos', async (I, Todos04_APage) => {
    I.say('Given I have some completed todos')
    Todos04_APage.enterTodo('foo')
    Todos04_APage.enterTodo('bar')
    Todos04_APage.enterTodo('baz')
  
    Todos04_APage.markAllAsCompleted()
  
    I.say('When I clear all completed items')
    Todos04_APage.clearCompleted()
    Todos04_APage.seeNumberOfTodos(0)
  
    I.saveScreenshot('clear-completed-todos.png')
})

