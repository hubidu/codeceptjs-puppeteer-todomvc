const assert = require('assert')

const I = actor();

const nthXpathTodoItemNotCompleted = nth => ({ xpath: `//*[contains(@class,"todo-list")]/li[${nth}][@class = "ng-scope"]/div/input` })
const nthXpathTodoItemCompleted = nth =>    ({ xpath: `//*[contains(@class,"todo-list")]/li[${nth}][@class = "ng-scope completed"]/div/input` })

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

    seeNumberOfTodos(numberOfTodos) {
        I.seeNumberOfVisibleElements('.todo-list li', numberOfTodos)
    },
    
    seeEmptyTodoInput() {
        I.seeInField('.new-todo', '')
    },

    seeFooter() {
        I.seeElement('footer.info')
    },

    // Xpath alternative

    markNthAsCompleted(nthTodo) {
        I.waitForVisible(nthXpathTodoItemNotCompleted(nthTodo))
        I.click(nthXpathTodoItemNotCompleted(nthTodo))
    },

    unmarkNthAsCompleted(nthTodo) {
        I.waitForVisible(nthXpathTodoItemCompleted(nthTodo))
        I.click(nthXpathTodoItemCompleted(nthTodo))
    },

    seeNthTodoEquals(nthTodo, todo) {
        I.waitForVisible(`//*[contains(@class,"todo-list")]/li[${nthTodo}][descendant::label[contains(text(), "${todo}")]]`)
    }
}
