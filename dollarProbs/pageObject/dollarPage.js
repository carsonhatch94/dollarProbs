var dollarCommands = {
    login: function (){
        this
        .click('@burger')
        .pause(500)
        .click('@accountBtn')
        .pause(1000)
        .click('@loginBtnDropDown')
        .pause(1000)
        .click('@email')
        .setValue('@email', 'moenoodleman@yahoo.com')
        .click('@password')
        .setValue('@password', '123456789qwerty')
        .click('@loginBtn')
        return this
    },
    logout: function (){
        this
        .click('@burger')
        .pause(500)
        .click('@accountBtn')
        .pause(1000)
        .click('@logout')
        return this
    },
    postService: function(serviceData){
        if(serviceData.title){
            this
                .clearValue('@serviceTitle')
                .setValue('@serviceTitle', serviceData.title)
        }
        if(serviceData.price){
            this
                .clearValue('@servicePrice')
                .setValue('@servicePrice', serviceData.price)
        }
        if(serviceData.location){
            this
                .clearValue('@serviceLocation')
                .setValue('@serviceLocation', serviceData.location)
        }
        if(serviceData.description){
            this
                .clearValue('@serviceDescription')
                .setValue('@serviceDescription', serviceData.description)
        }
        return this
    },
    lookupService: function(serviceData){
        if(serviceData.title){
            this
                .click('@burger')
                .pause(1000)
                .click('@serviceBtn')
                .setValue('@serviceSearch', serviceData.title)
                .expect.element('@serviceResults').text.to.contain(serviceData.title)
        }
    },
    postGig: function(gigData){
        if(gigData.title){
            this
                .clearValue('@gigTitle')
                .setValue('@gigTitle', gigData.title)
        }
        if(gigData.price){
            this
                .clearValue('@gigPrice')
                .setValue('@gigPrice', gigData.price)
        }
        if(gigData.location){
            this
                .clearValue('@gigLocation')
                .setValue('@gigLocation', gigData.location)
        }
        if(gigData.description){
            this
                .clearValue('@gigDescription')
                .setValue('@gigDescription', gigData.description)
        }
        return this
    },
    lookupGig: function(gigData){
        if(gigData.title){
            this
                .click('@burger')
                .pause(1000)
                .click('@gigBtn')
                .pause(1000)
                .setValue('@gigSearch', gigData.title)
                .expect.element('@gigResults').text.to.contain(gigData.title)
        }
    },
}




module.exports = {
    url: 'http://www.dollarprobs.com/',
    commands: [dollarCommands],
    elements: {
        logo: 'img[id="logo"]',
        burger: '#mobilemenu',
        accountBtn: '#dropdownMenuButton',
        loginBtnDropDown: 'a[class="dropdown-item"]',
        loggedInName: '#navbarNavAltMarkup > div > div > div > a:nth-child(1)',
        logout: 'a[href="/logout"]',
        email: 'input[name="username"]',
        password: 'input[name="password"]',
        loginBtn: 'button[type="submit"]',
        addService: '#myBtn',
        serviceTitle: 'input[placeholder="Title"]',
        servicePrice: '#ServiceMoney',
        serviceLocation: 'input[placeholder="Service Location"]',
        serviceDescription: 'textarea[placeholder="Description"]',
        serviceSubmit: 'input[type="submit"]',
        serviceBtn: '#navbarNavAltMarkup > div > a:nth-child(2)',
        serviceSearch: 'input[placeholder="Search for services"]',
        serviceResults: 'div[class="ais-hits row"]',
        addGig: '#myBtn2',
        gigTitle: 'form[action="/myaccount/gig"]>input[placeholder="Title"]',
        gigPrice: '#GigMoney',
        gigLocation: 'input[placeholder="Gig Location"]',
        gigDescription: 'form[action="/myaccount/gig"]>textarea',
        gigSubmit: 'form[action="/myaccount/gig"]>input[type="submit"]',
        gigBtn: '#navbarNavAltMarkup > div > a:nth-child(3)',
        gigSearch: 'input[class="ais-search-box--input"]',
        gigResults: '#hits'
        }
    }