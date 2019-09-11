const path = require('path')

const TestBaseDirectory = 'todo-mvc-app'

exports.config = {
    name: 'codeceptjs-todomvc',
    tests: path.join('.', TestBaseDirectory, '**', '*.test.js'), // Look for tests in all subfolders
    output: 'output', // Set output directory for screenshots, reports ...
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

        Mochawesome: {
          uniqueScreenshotNames: 'true'
        },

        CustomHelper: {
            require: './todo-mvc-app/helpers/custom.helper.js'
        }
    },

    include: { // For page objects etc. - nothing to to currently
        TodosPage: `./${TestBaseDirectory}/pages/todos.page.js`,
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

    // Enable various reporting options using multi-report
    // In practice you should probably pick only one
    mocha: {
        reporterOptions: {
            'codeceptjs-cli-reporter': {
                stdout: '-',
                options: {
                    // "verbose": true,
                    steps: true
                }
            },
            mochawesome: {
                stdout: './output/console.log',
                options: {
                    reportDir: './output',
                    reportFilename: 'report',
                    uniqueScreenshotNames: true
                }
            },
            'mocha-junit-reporter': {
                stdout: './output/console.log',
                options: {
                    mochaFile: './output/result.xml'
                },
                attachments: true // Add screenshot for a failed test
            }
        }
    }

    // JUnit only: npx codeceptjs run --reporter mocha-junit-reporter
    // "mocha": {
    //     "reporterOptions": {
    //         "mochaFile": "output/junit.xml"
    //     }
    // }

    // Mochawesome only: npx codeceptjs run --reporter mocha-multi
    // "mocha": {
    //     "reporterOptions": {
    //         "reportDir": "output"
    //     }
    // }
}
