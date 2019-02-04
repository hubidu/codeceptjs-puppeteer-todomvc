const path = require('path')

const TestBaseDirectory = 'todo-mvc-app'

exports.config = {
  name: 'codeceptjs-todomvc',
  tests: path.join('.', TestBaseDirectory, '**', '*.test.js'),                // look for tests in all subfolders
  output: '__out',                        // set output directory for screenshots, reports ...
  helpers: {
    Puppeteer: {
      url: 'http://localhost',            // irrelevant but required
      show: true,                         // show browser window - helpful while developing tests
      fullPageScreenshots: true,          // screenshots are taken of the full page (not just the viewport)
      waitForNavigation: 'domcontentloaded',  // for single page apps: wait until there are almost no more ajax requests going on
      waitForAction: 0,                   // set to 0 ms to speed up tests
      waitForTimeout: 15000,              // increase timeout when waiting for elements
      getPageTimeout: 30000,              // decrease page load timeout
      restart: false,                     // speed up tests by not restarting the browser between tests
      keepBrowserState: false,            // usually better to NOT keep browser state to keep tests independent
      keepCookies: false,                 // usually better to NOT keep cookies between test runs
      windowSize: '1900x2048',            // set browser window size to desktop
      
      chrome: {
        devtools: false,
        timeout: 0,
        args: [                           // Chrome optimizations on Linux and headless mode
          '--disable-gpu',
          '--disable-dev-shm-usage',
          '--disable-setuid-sandbox',
          '--no-sandbox'
        ]
      }
    },
    
    REST: {},                            // Enable calling REST APIs

    BifrostHelper: {                     // Reporting helper
      require: 'bifrost-io/codeceptjs/dashboard_helper.js'
    }
  },

  include: {                             // for page objects etc. - nothing to to currently
    Todos02Page: `./${TestBaseDirectory}/step_02/pages/todos.page.js`
  },                           

  multiple: {                            // config for parallel test execution
    parallel: {
      chunks: 4                          // number of parallel browser instances  
    }
  },

  bootstrap: null,                        // for running additional code before test run starts
  
  mocha: {}
}