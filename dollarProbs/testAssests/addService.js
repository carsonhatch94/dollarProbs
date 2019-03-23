module.exports = (pageObject, service) => {
    pageObject
        .pause(500)
        .click('@addService')
        .pause(500)
        .postService(service)
        .click('@serviceSubmit')
        .pause(1000)
}