let dPage = {}
let serviceList = require('../testAssests/services')
let gigList = require('../testAssests/gigs')
let as = require('../testAssests/addService')
let ss = require('../testAssests/searchService')
let ds = require('../testAssests/deleteService')
let ag = require('../testAssests/addGig')
let sg = require('../testAssests/searchGig')



module.exports = {
    beforeEach: browser=> {
        dPage = browser.page.dollarPage()
        dPage.navigate()
            .expect.element('@logo').to.be.visible.before(10000)
    },
    after: browser=> {
        browser.end()
    },
'Login, Add Services, Search Gigs': browser => {
    dPage.login()
    gigList.forEach(gigInput => {
        ag(dPage, gigInput)
    })
    gigList.forEach(gigInput => {
        sg(dPage, gigInput)
    })
},
    

'Login, Add Services, Search Services': browser => {
    dPage
        .click('@burger')
        .pause(500)
        .click('@accountBtn')
        .pause(1000)
        .click('@loggedInName')
        .pause(1000)
    serviceList.forEach(serviceInput => {
        as(dPage, serviceInput)
    })
    serviceList.forEach(serviceInput => {
        ss(dPage, serviceInput)
    })
}



}