Feature('Create Todos')

Before(async (I, Todos02Page) => {
    Todos02Page.goto()
})

Scenario('Create a new todo item', async (I, Todos02Page) => {
  I.say('Given I have an empty todo list')

  I.say('When I create a todo "foo"')
  Todos02Page.enterTodo('foo')

  I.say('Then I see the new todo on my list')
  Todos02Page.seeNumberOfTodos(1)

  I.saveScreenshot('create-todo-item.png')
})

Scenario('Create multiple todo items', async (I, Todos02Page) => {
  I.say('Given I have an empty todo list')

  I.say('When I create todos "foo", "bar" and "baz"')
  Todos02Page.enterTodo('foo')
  Todos02Page.enterTodo('bar')
  Todos02Page.enterTodo('baz')

  I.say('Then I have these 3 todos on my list')
  Todos02Page.seeNumberOfTodos(3)

  I.saveScreenshot('create-multiple-todo-items.png')
})