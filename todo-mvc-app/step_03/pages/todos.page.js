const assert = require('assert')

const I = actor();

module.exports = {
    goto() {
        I.amOnPage('http://todomvc.com/examples/angularjs/#/')
        I.refreshPage()
        I.waitForVisible('.new-todo')    
    },

    focusNewTodoField() {
        I.click('.new-todo')
    },

    typeTodoAndEnter(todo) {
        I.typeText(todo)
        I.pressKey('Enter')        
    },

    /**
     * Alternatively do all in one
     */
    enterTodo(todo) {
        I.fillField('.new-todo', todo)
        I.pressKey('Enter')        
    },

    seeNumberOfTodos(numberOfTodos) {
        I.seeNumberOfVisibleElements('.todo-list li', numberOfTodos)
    },
    
    seeEmptyTodoInput() {
        I.seeInField('.new-todo', '')
    },

    // async seeNthTodoEquals(nthTodo, todo) {
    //     let todos = await I.grabTextFrom('.todo-list li')
    //     if (typeof todos === 'string') {
    //         todos = [todos]
    //     }

    //     assert(todos[nthTodo - 1] === todo, `Expected "${todo}" but got "${todos[nthTodo - 1]}"`)
    //     return todos
    // }

    seeNthTodoEquals(nthTodo, todo) {
        I.seeTextEquals(todo, `.todo-list li:nth-child(${nthTodo})`)
    },

    seeFooter() {
        I.seeElement('footer.info')
    }
}