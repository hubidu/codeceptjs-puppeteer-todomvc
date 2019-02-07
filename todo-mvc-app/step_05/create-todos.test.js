Feature('Create Todos')

Before(async (I, Todos05Page) => {
    Todos05Page.goto()
})

/**
 * Happy Path tests
 */
Scenario('Create a new todo item', async (I, Todos05Page) => {
  I.say('Given I have an empty todo list')

  I.say('When I create a todo "foo"')
  Todos05Page.enterTodo('foo')

  I.say('Then I see the new todo on my list')
  Todos05Page.seeNumberOfTodos(1)

  I.saveScreenshot('create-todo-item.png')
})

Scenario('Create multiple todo items', async (I, Todos05Page) => {
  I.say('Given I have an empty todo list')

  I.say('When I create todos "foo", "bar" and "baz"')
  Todos05Page.enterTodo('foo')
  Todos05Page.enterTodo('bar')
  Todos05Page.enterTodo('baz')

  I.say('Then I have these 3 todos on my list')
  Todos05Page.seeNumberOfTodos(3)

  I.saveScreenshot('create-multiple-todo-items.png')
})

/**
 * Edge cases
 */
Scenario('Text input field should be cleared after each item', async (I, Todos05Page) => {
  I.say('Given I have an empty todo list')
  I.say('When I enter a new todo')
  Todos05Page.enterTodo('foo')

  I.say('Then I see that the input field has been cleared')
  Todos05Page.seeEmptyTodoInput()
})

Scenario('Text input should be trimmed', async (I, Todos05Page) => {
  I.say('Given I have an empty todo list')
  I.say('When I enter a todo with whitespace around the text')
  Todos05Page.enterTodo('       Todo with lots of whitespace around       ')

  I.say('Then I see the trimmed text of the todo in the list')
  await Todos05Page.seeNthTodoEquals(1, 'Todo with lots of whitespace around')
})


Scenario('New todos should be added to the bottom of the list', async (I, Todos05Page) => {
  I.say('Given I added some todos')
  Todos05Page.enterTodo('first')
  Todos05Page.enterTodo('second')
  Todos05Page.enterTodo('last')

  I.say('When I look at my todo list')
  I.say('Then I see the todos in the order in which I added them')
  await Todos05Page.seeNthTodoEquals(1, 'first')
  await Todos05Page.seeNthTodoEquals(2, 'second')
  await Todos05Page.seeNthTodoEquals(3, 'last')
})


Scenario('Footer should be visible when adding TODOs', async (I, Todos05Page) => {
  Todos05Page.seeFooter()
  Todos05Page.enterTodo('first')
  Todos05Page.seeFooter()
})



