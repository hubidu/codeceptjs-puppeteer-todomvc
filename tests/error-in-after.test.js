Feature.skip('Bugs')
/**
 * Given I have the following config with the Puppeteer helper
 * 
 * Puppeteer: {
 *  ...
 *  restart: false
 *  ...
 * }
 * 
 * When the test throws an error before interacting with the browser
 * Then I get this error message
 * 
 * 2) Bug
 *      "after each" hook: finalize codeceptjs for "Throw error before interacting with the browser":
 *    Evaluation failed: DOMException: Failed to read the 'localStorage' property from 'Window': Access is denied for this document.
 *   at __puppeteer_evaluation_script__:1:1
 * 
 */
Scenario('Throw error before interacting with the browser', (I) => {
  throw new Error('Boom')
})
  
