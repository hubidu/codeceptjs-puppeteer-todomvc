Feature('Create Todos')

// Before(async (I, Todos02Page) => {
//     Todos02Page.goto()
// })

/**
 * Happy Path tests
 */
Scenario('Create a new todo item @step-03', async (I, Todos03Page) => {
  I.say('Given I have an empty todo list')

  I.say('When I create a todo "foo"')
  Todos03Page.enterTodo('foo')

  I.say('Then I see the new todo on my list')
  Todos03Page.seeNumberOfTodos(1)

  I.saveScreenshot('create-todo-item.png')
})

Scenario('Create multiple todo items @step-03', async (I, Todos03Page) => {
  I.say('Given I have an empty todo list')

  I.say('When I create todos "foo", "bar" and "baz"')
  Todos03Page.focusNewTodoField()

  Todos03Page.typeTodoAndEnter('foo')
  Todos03Page.typeTodoAndEnter('bar')
  Todos03Page.typeTodoAndEnter('baz')

  I.say('Then I have these 3 todos on my list')
  Todos03Page.seeNumberOfTodos(3)

  I.saveScreenshot('create-multiple-todo-items.png')
})

/**
 * Edge cases
 */
Scenario('Text input field should be cleared after each item @step-03', async (I, Todos03Page) => {
  I.say('Given I have an empty todo list')
  I.say('When I enter a new todo')
  Todos03Page.enterTodo('foo')

  I.say('Then I see that the input field has been cleared')
  Todos03Page.seeEmptyTodoInput()
})

Scenario('Text input should be trimmed @step-03', async (I, Todos03Page) => {
  I.say('Given I have an empty todo list')
  I.say('When I enter a todo with whitespace around the text')
  Todos03Page.enterTodo('       Todo with lots of whitespace around       ')

  I.say('Then I see the trimmed text of the todo in the list')
  Todos03Page.seeNthTodoEquals(1, 'Todo with lots of whitespace around')
})

/**
 * Happy Path
 */
Scenario('New todos should be added to the bottom of the list @step-03', async (I, Todos03Page) => {
  I.say('Given I added some todos')
  Todos03Page.enterTodo('first')
  Todos03Page.enterTodo('second')
  Todos03Page.enterTodo('last')

  I.say('When I look at my todo list')
  I.say('Then I see the todos in the order in which I added them')
  Todos03Page.seeNthTodoEquals(1, 'first')
  Todos03Page.seeNthTodoEquals(2, 'second')
  Todos03Page.seeNthTodoEquals(3, 'last')
})

/**
 * Edge Case
 */
Scenario('Footer should be visible when adding TODOs @step-03', async (I, Todos03Page) => {
  Todos03Page.seeFooter()
  Todos03Page.enterTodo('first')
  Todos03Page.seeFooter()
})



