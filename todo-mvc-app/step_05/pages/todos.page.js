const assert = require('assert')

const I = actor()

const nthTodoCheckbox = nth => ({ xpath: `(//*[contains(@class,"todo-list")]/li/div/input)[${nth}]`})
const nthTTodoDeleteButton = nth => ({ xpath: `(//*[contains(@class,"todo-list")]/li/div/button)[${nth}]`})
const nthTodoEditField = nth => ({ xpath: `(//*[contains(@class,"todo-list")]/li/form/input)[${nth}]`})
const nthTodoItem = nth => ({ xpath: `(//*[contains(@class,"todo-list")]/li)[${nth}]`})
const nthTodoItemCss = nth => `.todo-list li:nth-child(${nth})`

module.exports = {
    goto() {
        I.amOnPage('http://todomvc.com/examples/angularjs/#/')
        I.refreshPage()
        I.waitForVisible('.new-todo')
    },

    enterTodo(todo) {
        I.fillField('.new-todo', todo)
        I.pressKey('Enter')
    },

    async markNthAsCompleted(nthTodo) {
        const classNames = await I.grabAttributeFrom(nthTodoItem(nthTodo), 'class')
        assert(classNames.indexOf('completed') < 0, 'Expected todo to be not already marked as completed')
        I.click(nthTodoCheckbox(nthTodo))
    },

    async unmarkNthAsCompleted(nthTodo) {
        const classNames = await I.grabAttributeFrom(nthTodoItem(nthTodo), 'class')
        assert(classNames.indexOf('completed') >= 0, 'Expected todo to be marked as completed')
        I.click(nthTodoCheckbox(nthTodo))
    },

    markAllAsCompleted() {
        I.click('label[for="toggle-all"')
    },

    clearCompleted() {
        I.click('button.clear-completed')
    },

    filterAll() {
        I.click(locate('.filters li').at(1))
    },

    filterActive() {
        I.click(locate('.filters li').at(2))
    },

    filterCompleted() {
        I.click(locate('.filters li').at(3))
    },

    editNthTodo(nthTodo, newTodoText) {
        I.doubleClick(nthTodoItem(nthTodo))
        I.fillField(nthTodoEditField(nthTodo), newTodoText)
        I.pressKey('Enter')
    },

    deleteNthTodo(nthTodo) {
        // Use a custom helper function to hover over an todo item
        I.hover(nthTodoItemCss(nthTodo))
        I.click(nthTTodoDeleteButton(nthTodo))
    },

    async seeNthTodoEquals(nthTodo, todo) {
        let todos = await I.grabTextFrom('.todo-list li')
        if (typeof todos === 'string') {
            todos = [todos]
        }

        assert(todos[nthTodo - 1] === todo, `Expected "${todo}" but got "${todos[nthTodo - 1]}"`)
        return todos
    },

    seeNumberOfTodos(numberOfTodos) {
        I.seeNumberOfVisibleElements('.todo-list li', numberOfTodos)
    },
    
    seeEmptyTodoInput() {
        I.seeInField('.new-todo', '')
    },

    seeFooter() {
        I.seeElement('footer.info')
    }
}