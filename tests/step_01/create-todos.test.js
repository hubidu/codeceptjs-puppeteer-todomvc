Feature('Create Todos')

Before(async (I) => {
    I.amOnPage('http://todomvc.com/examples/angularjs/#/')
    I.refreshPage()
    I.waitForVisible('.new-todo')
})

Scenario('Create a new todo item', async (I) => {
  I.fillField('.new-todo', 'foo')
  I.pressKey('Enter')
  I.seeNumberOfVisibleElements('.todo-list li', 1)

  I.saveScreenshot('create-todo-item.png')
})

Scenario('Create multiple todo items', async (I) => {
  const todos = await I.executeAsyncScript(done => {
    const todos = localStorage.getItem('todos-angularjs');
    return done(todos)
  });

  I.fillField('.new-todo', 'foo')
  I.pressKey('Enter')  

  I.fillField('.new-todo', 'bar')
  I.pressKey('Enter')  

  I.fillField('.new-todo', 'baz')
  I.pressKey('Enter')  

  I.seeNumberOfVisibleElements('.todo-list li', 3)

  I.saveScreenshot('create-multiple-todo-items.png')
})