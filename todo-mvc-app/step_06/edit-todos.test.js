Feature('Edit/Delete Todos @step-06')

Before(async (I, Todos06Page) => {
    Todos06Page.goto()

    Todos06Page.enterTodo('foo')
    Todos06Page.enterTodo('bar')
    Todos06Page.enterTodo('baz')
})

Scenario('Edited todo is saved on blur', async (I, Todos06Page) => {
    I.say('Given I have some todos')
  
    I.say('When I edit the first todo')
    await Todos06Page.editNthTodo(1, 'boom')
  
    I.say('Then I see that the todo text has been changed')
    await Todos06Page.seeNthTodoEquals(1, 'boom')

    I.saveScreenshot('edited-todo-saved-on-blur.png')
})

Scenario('Delete todos', async (I, Todos06Page) => {
    I.say('Given I have some todos')
    I.say('When I delete the first todo')
    Todos06Page.deleteNthTodo(1)

    I.say('Then the todo should disappear from the list')
    Todos06Page.seeNumberOfTodos(2)    
})
  