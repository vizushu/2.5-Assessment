const functions = require('../test-assets/functions')
const data      = require('../test-assets/testData')

module.exports = {
    beforeEach: browser => {
        browser.url('http://localhost:3000/')
            .waitForElementPresent('body', 3000)
    },
    after: browser => {
        browser
            .end()
    },
    'Even and Odd test' : browser => {functions.evenOdd(browser)},
    'Filter Object test': browser => {functions.filterObj(browser)},
    'Filter Name test': browser => {functions.filterName(browser)},
    'Palindrome test' : browser => {functions.palindrome(browser)},
    'Sum test': browser => {functions.sum(browser)}

}


