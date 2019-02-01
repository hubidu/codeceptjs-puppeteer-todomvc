Feature('Create Todos')

Before(async (I) => {
    I.amOnPage('http://todomvc.com/examples/angularjs/#/')
    I.refreshPage()
    I.waitForVisible('.new-todo')
})

Scenario('Create a new todo item', async (I) => {
  I.say('Given I have an empty todo list')

  I.say('When I create a todo "foo"')
  I.fillField('.new-todo', 'foo')
  I.pressKey('Enter')

  I.say('Then I see the new todo on my list')
  I.seeNumberOfVisibleElements('.todo-list li', 1)

  I.saveScreenshot('create-todo-item.png')
})

Scenario('Create multiple todo items', async (I) => {
  I.say('Given I have an empty todo list')

  I.say('When I create todos "foo", "bar" and "baz"')
  I.fillField('.new-todo', 'foo')
  I.pressKey('Enter')  

  I.fillField('.new-todo', 'bar')
  I.pressKey('Enter')  

  I.fillField('.new-todo', 'baz')
  I.pressKey('Enter')  

  I.say('Then I have these 3 todos on my list')
  I.seeNumberOfVisibleElements('.todo-list li', 3)

  I.saveScreenshot('create-multiple-todo-items.png')
})