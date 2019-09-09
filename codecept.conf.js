const path = require('path')

const TestBaseDirectory = 'todo-mvc-app'

exports.config = {
    name: 'codeceptjs-todomvc',
    tests: path.join('.', TestBaseDirectory, '**', '*.test.js'), // Look for tests in all subfolders
    output: '__out', // Set output directory for screenshots, reports ...
    helpers: {

        Puppeteer: {
            url: 'http://localhost', // Set it to the url of the application under test (but can also be done in page object)
            show: true, // Show browser window - helpful while developing tests
            fullPageScreenshots: true, // Screenshots are taken of the full page (not just the viewport)
            waitForNavigation: 'networkidle0', // For single page apps: wait until there are almost no more ajax requests going on
            waitForAction: 0, // Set to 0 ms to speed up tests
            waitForTimeout: 15000, // Timeout to wait for elements to appear/become visible
            getPageTimeout: 30000 // Timeout to wait for page to load
        },

        // TestCafe: {
        //     url: 'http://localhost',
        //     browser: 'ie',
        //     show: true,
        //     waitForTimeout: 10000,
        //     getPageTimeout: 30000
        // },

        REST: {}, // Enable calling REST APIs

        // BifrostHelper: { // Reporting helper (does not work with BDD)
        //     require: './node_modules/bifrost-io/codeceptjs/dashboard_helper.js'
        // },

        // Mochawesome: {
        //   uniqueScreenshotNames: 'true'
        // },

        CustomHelper: {
            require: './todo-mvc-app/step_06/helpers/custom.helper.js'
        },

        MockHelper: {
            require: './todo-mvc-app/test/mock.helper.js'
        }
    },

    include: { // For page objects etc. - nothing to to currently
        Todos02Page: `./${TestBaseDirectory}/step_02/pages/todos.page.js`,

        Todos03Page: `./${TestBaseDirectory}/step_03/pages/todos.page.js`,

        Todos04Page: `./${TestBaseDirectory}/step_04/pages/todos.page.js`,
        // Todos04Page: `./${TestBaseDirectory}/step_04/pages/todos_alt.page.js`,

        Todos05Page: `./${TestBaseDirectory}/step_05/pages/todos.page.js`,

        Todos06Page: `./${TestBaseDirectory}/step_06/pages/todos.page.js`,

        TodosBddPage: `./${TestBaseDirectory}/bdd/pages/todos.page.js`
    },

    gherkin: { // Use codeceptjs with gherkin
        features: './todo-mvc-app/bdd/features/*.feature',
        steps: [
            './todo-mvc-app/bdd/step_definitions/create-todos.steps.js'
        ]
    },

    multiple: { // Config for parallel test execution
        parallel: {
            chunks: 4 // Number of parallel browser instances
        }
    },

    bootstrap: null, // For running additional code before test run starts

    // plugins: {
    //     allure: {},
    //     stepByStepReport: {
    //         enabled: true,
    //         deleteSuccessful: true,
    //         animateSlides: false,
    //         fullPageScreenshots: true,
    //         screenshotsForAllureReport: true,
    //         ignoreSteps: ['grab*', 'wait*', 'fillField*']
    //     }
    // },

    mocha: {}
}
