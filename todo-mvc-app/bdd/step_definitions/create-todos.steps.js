const TodosPage = require('../pages/todos.page')

/**
 * Given
 */
Given(/I have an empty todo list/, () => {
    TodosPage.goto()
})

/**
 * When
 */
When(/I create a todo "foo"/, () => {
    TodosPage.enterTodo('foo')
})

When(/I create todos "foo", "bar" and "baz"/, () => {
    TodosPage.enterTodo('foo')
    TodosPage.enterTodo('bar')
    TodosPage.enterTodo('baz')
})

/**
 * Then
 */
Then(/I have these 3 todos on my list/, () => {
    TodosPage.seeNumberOfTodos(3)
})

Then(/I see the new todo on my list/, () => {
    TodosPage.seeNumberOfTodos(1)
})
