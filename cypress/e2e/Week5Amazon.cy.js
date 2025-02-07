Cypress.on('uncaught:exception',(err,runnable) =>{
    return false 
})
import AmazonData from "../PageObject/week5amazon.cy'";

describe('Amazon Website', () => {
    const amazon=new AmazonData()
    before(function(){
        cy.fixture('AmazonDataWeek5').then(function(data){
        this.data=data
    })
    }) 
    beforeEach(()=>{
        cy.visit("https://www.amazon.com/")   
        })
        
it('Create account', function(){
    cy.fixture('AmazonData').then(function(data){
        this.data=data
    amazon.createAccount()
    amazon.newAccountName(this.data.yourname)
    amazon.newAccountEmail(this.data.Email)
    amazon.newAccountPassword(this.data.Password)
    amazon.newAccountReEnterPassword(this.data.ReEnterPassword)

    cy.get("#continue").should("be.visible").and("be.enabled").click()
    cy.get('#register-mase-inlineerror > .a-box-inner > .a-alert-content').contains("There's already an account with this email")
})
})

it.only('Signup with invalid Email and Phone Number', function(){
    cy.fixture('AmazonData').then(function(data){
        this.data=data
    amazon.signup()
    amazon.signupwithInvalidEmail(this.data.InvalidEmail)
    cy.get('.a-list-item').contains("We cannot find an account with that email address")
    amazon.signupwithInvalidNumber(this.data.InvalidNumber)
    cy.get('.a-list-item').contains("We cannot find an account with that mobile number")
})
})

it('Signup with invalid password', function(){
    cy.fixture('AmazonData').then(function(data){
        this.data=data
    amazon.signup()
    amazon.signupwithEmail(this.data.Email)
    amazon.signinwithInvalidPassword(this.data.InvalidPassword)
    cy.contains("To better protect your account, please re-enter your password and then enter the characters as they are shown in the image below.")
    // got cross orgin error false the websecurity got error page so load the signin page by visit the url
    cy.visit("https://www.amazon.in/ap/signin?openid.pape.max_auth_age=900&openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fgp%2Fyourstore%2Fhome%3Fpath%3D%252Fgp%252Fyourstore%252Fhome%26signIn%3D1%26useRedirectOnSuccess%3D1%26action%3Dsign-out%26ref_%3Dnav_AccountFlyout_signout&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0")
    amazon.signupwithphoneNumber(this.data.Number)
    amazon.signinwithInvalidPassword(this.data.InvalidPassword)
    cy.contains("To better protect your account, please re-enter your password and then enter the characters as they are shown in the image below.")
})
})

it('Sucessful Signup with Phone Number', function(){
    cy.fixture('AmazonData').then(function(data){
        this.data=data
    amazon.signup()
    amazon.signupwithphoneNumber(this.data.Number)
    amazon.signinwithvalidPassword(this.data.Password)
    cy.contains("Hello, Aswinkumar")
})
})

it('product Search and add to card', function(){
    cy.fixture('AmazonData').then(function(data){
        this.data=data
    amazon.signup()
    amazon.signupwithphoneNumber(this.data.Number)
    amazon.signinwithvalidPassword(this.data.Password)
    cy.contains("Hello, Aswinkumar")
cy.get("#twotabsearchtextbox").type('airpods')
cy.wait(2000)
cy.contains('airpods pro').should('be.visible').click({force:true})
cy.title().should("eq","Amazon.in : airpods pro")
cy.contains("Apple AirPods Pro (2nd Generation) ​​​​​​​").invoke("removeAttr", "target").click({force:true})
cy.wait(7000)
cy.get("#add-to-cart-button").click()
cy.get("#nav-cart").click({force:true})
cy.title().should("eq","Amazon.in Shopping Cart")
cy.get("#sc-active-C3bc03caa-a24e-443d-ab76-643bd93b6800").should("be.visible")

})
})  
})
