const I = actor();

module.exports = new class TodoPage {
    goto() {
        I.amOnPage('http://todomvc.com/examples/angularjs/#/')
        I.refreshPage()
        I.waitForVisible('.new-todo')    
    }

    enterTodo(todo) {
        I.fillField('.new-todo', 'foo')
        I.pressKey('Enter')        
    }

    seeNumberOfTodos(numberOfTodos) {
        I.seeNumberOfVisibleElements('.todo-list li', numberOfTodos)
    }    
}