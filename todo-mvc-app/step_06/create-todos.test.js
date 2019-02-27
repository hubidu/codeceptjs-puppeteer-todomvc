Feature('Create Todos @step-06')

Before(async (I, Todos06Page) => {
    Todos06Page.goto()
})

/**
 * Happy Path tests
 */
Scenario('Create a new todo item', async (I, Todos06Page) => {
  I.say('Given I have an empty todo list')

  I.say('When I create a todo "foo"')
  Todos06Page.enterTodo('foo')

  I.say('Then I see the new todo on my list')
  Todos06Page.seeNumberOfTodos(1)

  I.saveScreenshot('create-todo-item.png')
})

Scenario('Create multiple todo items', async (I, Todos06Page) => {
  I.say('Given I have an empty todo list')

  I.say('When I create todos "foo", "bar" and "baz"')
  Todos06Page.enterTodo('foo')
  Todos06Page.enterTodo('bar')
  Todos06Page.enterTodo('baz')

  I.say('Then I have these 3 todos on my list')
  Todos06Page.seeNumberOfTodos(3)

  I.saveScreenshot('create-multiple-todo-items.png')
})

/**
 * Edge cases
 */

const examples = new DataTable(['Todo Text', 'Result'])
examples.add(['Todo with umlauts äöü', 'is in list'])
examples.add(['Very loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong TooooooooooooooooooooooooooooooooooooooooDooooooooooooooo', 'is in list'])
examples.add(['Todo with html code <script>alert("hello")</script>', 'is in list'])

Data(examples).
Scenario('Todos containing weird characters', async (I, current, Todos06Page) => {
  I.say('When I enter {Todo Text}')
  Todos06Page.enterTodo(current['Todo Text'])

  I.say('Then I see {Result}')
  if (current['Result'] === 'is in list') {
    Todos06Page.seeNthTodoEquals(1, current['Todo Text'])
  }
})

Scenario('Text input field should be cleared after each item', async (I, Todos06Page) => {
  I.say('Given I have an empty todo list')
  I.say('When I enter a new todo')
  Todos06Page.enterTodo('foo')

  I.say('Then I see that the input field has been cleared')
  Todos06Page.seeEmptyTodoInput()
})

Scenario('Text input should be trimmed', async (I, Todos06Page) => {
  I.say('Given I have an empty todo list')
  I.say('When I enter a todo with whitespace around the text')
  Todos06Page.enterTodo('       Todo with lots of whitespace around       ')

  I.say('Then I see the trimmed text of the todo in the list')
  await Todos06Page.seeNthTodoEquals(1, 'Todo with lots of whitespace around')
})


Scenario('New todos should be added to the bottom of the list', async (I, Todos06Page) => {
  I.say('Given I added some todos')
  Todos06Page.enterTodo('first')
  Todos06Page.enterTodo('second')
  Todos06Page.enterTodo('last')

  I.say('When I look at my todo list')
  I.say('Then I see the todos in the order in which I added them')
  await Todos06Page.seeNthTodoEquals(1, 'first')
  await Todos06Page.seeNthTodoEquals(2, 'second')
  await Todos06Page.seeNthTodoEquals(3, 'last')
})


Scenario('Footer should be visible when adding TODOs', async (I, Todos06Page) => {
  I.say('Given I am adding todos')
  Todos06Page.seeFooter()
  I.say('When I add a todo')
  Todos06Page.enterTodo('first')
  I.say('Then I always see the footer')
  Todos06Page.seeFooter()
})



