Feature('Mark as completed/not completed')

Before(async (I, Todos05Page) => {
    Todos05Page.goto()

    Todos05Page.enterTodo('foo')
    Todos05Page.enterTodo('bar')
    Todos05Page.enterTodo('baz')
})

Scenario('Edited todo is saved on blur', async (I, Todos05Page) => {
    I.say('Given I have some todos')

    I.say('When I edit the first todo')
    await Todos05Page.editNthTodo(1, 'boom')

    I.say('Then I see that the todo text has been changed')
    await Todos05Page.seeNthTodoEquals(1, 'boom')

    I.saveScreenshot('edited-todo-saved-on-blur.png')
})

Scenario('Delete todos', async (I, Todos05Page) => {
    I.say('Given I have some todos')
    I.say('When I delete the first todo')
    Todos05Page.deleteNthTodo(1)

    I.say('Then the todo should disappear from the list')
    Todos05Page.seeNumberOfTodos(2)    
})
