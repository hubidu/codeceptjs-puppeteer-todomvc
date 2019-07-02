/// <reference path="../../steps.d.ts" />
Feature('Hello World')

Scenario('Goto CHECK24', (I) => {
    I.amOnPage('http://www.check24.de')
    I.see('Die meist genutzten Vergleiche')
})
