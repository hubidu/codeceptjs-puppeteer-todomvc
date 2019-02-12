Feature: Create Todos

   Various scenarios how to create Todos

Scenario: Create a new todo item
Given I have an empty todo list
When I create a todo "foo"
Then I see the new todo on my list

Scenario: Create multiple todo items
Given I have an empty todo list
When I create todos "foo", "bar" and "baz"
Then I have these 3 todos on my list
