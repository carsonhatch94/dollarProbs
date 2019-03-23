module.exports = (pageObject, gig) => {
    pageObject
        .pause(500)
        .click('@addGig')
        .pause(500)
        .postGig(gig)
        .click('@gigSubmit')
        .pause(1000)
}