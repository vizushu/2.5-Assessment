const functions = require('./functions')
const data      = require('./testData')

module.exports = {
    beforeEach: browser => {
        browser.url('http://localhost:3000/')
    },
    after: browser => {
        browser
            .end()
    },
    'Even and Odds test' : browser => {functions.evenOdd()},
    'Filter Object test': browser => {functions.filterObj()},
    'Filter Name test': browser => {functions.filterName()},
    'Palindrome test' : browser => {functions.palindrome()},
    'Sum test': browser => {functions.sum()}

}


