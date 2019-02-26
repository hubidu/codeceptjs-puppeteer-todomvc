const assert = require('assert')

const I = actor();

const nthTodoCheckbox = nth => ({ xpath: `(//*[contains(@class,"todo-list")]/li/div/input)[${nth}]`})
const nthTodoItem = nth => ({ xpath: `(//*[contains(@class,"todo-list")]/li)[${nth}]`})
const nthXpathTodoItemNotCompleted = nth => ({ xpath: `//*[contains(@class,"todo-list")]/li[${nth}][not(@class = "completed")]/div/input` })
const nthXpathTodoItemCompleted = nth =>    ({ xpath: `//*[contains(@class,"todo-list")]/li[${nth}][@class = "completed"]/div/input` })

module.exports = new class TodoPage {
    goto() {
        I.amOnPage('http://todomvc.com/examples/react/#/')
        I.refreshPage()
        I.waitForVisible('.new-todo')    
    }

    enterTodo(todo) {
        I.fillField('.new-todo', todo)
        I.pressKey('Enter')        
    }

    markAllAsCompleted() {
        I.click('label[for="toggle-all"')
    }

    clearCompleted() {
        I.click('button.clear-completed')
    }

    filterAll() {
        I.click(locate('.filters li').at(1))
    }

    filterActive() {
        I.click(locate('.filters li').at(2))
    }

    filterCompleted() {
        I.click(locate('.filters li').at(3))
    }

    seeNumberOfTodos(numberOfTodos) {
        I.seeNumberOfVisibleElements('.todo-list li', numberOfTodos)
    }
    
    seeEmptyTodoInput() {
        I.seeInField('.new-todo', '')
    }

    seeFooter() {
        I.seeElement('footer.info')
    }

    // Xpath alternative

    markNthXpathAsCompleted(nthTodo) {
        I.waitForVisible(nthXpathTodoItemNotCompleted(nthTodo))
        I.click(nthXpathTodoItemNotCompleted(nthTodo))
    }

    unmarkNthXpathAsCompleted(nthTodo) {
        I.waitForVisible(nthXpathTodoItemCompleted(nthTodo))
        I.click(nthXpathTodoItemCompleted(nthTodo))
    }

    seeNthXpathTodoEquals(nthTodo, todo) {
        I.waitForVisible(`//*[contains(@class,"todo-list")]/li[${nthTodo}][descendant::label[contains(text(), "${todo}")]]`)
    }
}