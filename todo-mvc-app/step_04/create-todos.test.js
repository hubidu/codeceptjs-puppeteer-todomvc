Feature('Create Todos')

Before(async (I, Todos04Page) => {
    Todos04Page.goto()
})

/**
 * Happy Path tests
 */
Scenario('Create a new todo item', async (I, Todos04Page) => {
  I.say('Given I have an empty todo list')

  I.say('When I create a todo "foo"')
  Todos04Page.enterTodo('foo')

  I.say('Then I see the new todo on my list')
  Todos04Page.seeNumberOfTodos(1)

  I.saveScreenshot('create-todo-item.png')
})

Scenario('Create multiple todo items', async (I, Todos04Page) => {
  I.say('Given I have an empty todo list')

  I.say('When I create todos "foo", "bar" and "baz"')
  Todos04Page.enterTodo('foo')
  Todos04Page.enterTodo('bar')
  Todos04Page.enterTodo('baz')

  I.say('Then I have these 3 todos on my list')
  Todos04Page.seeNumberOfTodos(3)

  I.saveScreenshot('create-multiple-todo-items.png')
})

/**
 * Edge cases
 */
Scenario('Text input field should be cleared after each item', async (I, Todos04Page) => {
  I.say('Given I have an empty todo list')
  I.say('When I enter a new todo')
  Todos04Page.enterTodo('foo')

  I.say('Then I see that the input field has been cleared')
  Todos04Page.seeEmptyTodoInput()
})

Scenario('Text input should be trimmed', async (I, Todos04Page) => {
  I.say('Given I have an empty todo list')
  I.say('When I enter a todo with whitespace around the text')
  Todos04Page.enterTodo('       Todo with lots of whitespace around       ')

  I.say('Then I see the trimmed text of the todo in the list')
  await Todos04Page.seeNthTodoEquals(1, 'Todo with lots of whitespace around')
})


Scenario('New todos should be added to the bottom of the list', async (I, Todos04Page) => {
  I.say('Given I added some todos')
  Todos04Page.enterTodo('first')
  Todos04Page.enterTodo('second')
  Todos04Page.enterTodo('last')

  I.say('When I look at my todo list')
  I.say('Then I see the todos in the order in which I added them')
  await Todos04Page.seeNthTodoEquals(1, 'first')
  await Todos04Page.seeNthTodoEquals(2, 'second')
  await Todos04Page.seeNthTodoEquals(3, 'last')
})


Scenario('Footer should be visible when adding TODOs', async (I, Todos04Page) => {
  Todos04Page.seeFooter()
  Todos04Page.enterTodo('first')
  Todos04Page.seeFooter()
})



