/// <reference types="cypress"/>
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    });
    const dataJson=require('../fixtures/saucedemo.json')
    describe('SauceDemo Page_26102022',function()
    { 
       it('LoginPage', function ()    // Login wiht all given credentials
       {  
          cy.visit("https://www.saucedemo.com/")     
          cy.title().should('eq','Swag Labs')
          cy.get('[placeholder="Username"]').type(dataJson.username1)        // first user ID
          cy.get('[placeholder="Password"]').type(dataJson.password)
          cy.get('#login-button').click({force:true})
          cy.url().should('contain','inventory')
          cy.wait(10000)
          cy.go(-1)
          cy.get('[placeholder="Username"]').type(dataJson.username2)       //Second User ID
          cy.get('[placeholder="Password"]').type(dataJson.password)
          cy.get('#login-button').click({force:true})
          cy.get('[data-test="error"]').should('have.text','Epic sadface: Sorry, this user has been locked out.') 
          cy.wait(10000)
          cy.get('[placeholder="Username"]').clear().type(dataJson.username3)    //Third User ID
          cy.get('[placeholder="Password"]').clear().type(dataJson.password)
          cy.get('#login-button').click({force:true})
          cy.url().should('contain','inventory')
          cy.wait(10000)
          cy.go(-1)
          cy.get('[placeholder="Username"]').clear().type(dataJson.username4)        //Fourth User ID 
          cy.get('[placeholder="Password"]').clear().type(dataJson.password)
          cy.get('#login-button').click({force:true})
          cy.url().should('contain','inventory')      
       })
       it('Select a product(Name(A to Z))', function () // place order
       {  
         cy.visit("https://www.saucedemo.com/") 
          
          cy.title().should('eq','Swag Labs')
          cy.wait(10000)
          cy.get('[placeholder="Username"]').clear().type(dataJson.username4)        // login with user
          cy.get('[placeholder="Password"]').clear().type(dataJson.password)
          cy.get('#login-button').click({force:true})
          cy.get('#item_3_img_link > .inventory_item_img').click({force:true})
          cy.get('.inventory_details_name').should('have.text','Test.allTheThings() T-Shirt (Red)')
          cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click({force:true})  // add product
          cy.get('.shopping_cart_link').click({force:true})          // go to cart
          cy.url().should('contain','cart')                 
          cy.get('#checkout').click({force:true})                 // check out
          cy.url().should('contain','checkout-step-one')
          cy.get('#first-name').type(dataJson.firstname)          // check out credentials 
          cy.get('#last-name').type(dataJson.lastname)
          cy.get('#postal-code').type(dataJson.code)
          cy.get('#continue').click({force:true})          // continue
          cy.url().should('contain','checkout-step-two')
          cy.get('#finish').click({force:true})     // finish
          cy.url().should('contain','checkout-complete')    
          cy.get('#checkout_complete_container > h2').should('have.text','THANK YOU FOR YOUR ORDER')
          cy.get('#back-to-products').click({force:true})     // back to product page
          cy.url().should('contain','inventory')
          cy.get('#react-burger-menu-btn').click({force:true})         // menu bar
          cy.get('#logout_sidebar_link').click({force:true})            // logout
          cy.get('.bot_column').should("be.visible")         
    })
    it('Select a product(Name(Z to A))', function ()  // Checking the Remove product /Continue Shopping
    {  
      cy.visit("https://www.saucedemo.com/") 
       cy.title().should('eq','Swag Labs')
       cy.get('[placeholder="Username"]').clear().type(dataJson.username4)        //Fourth User ID 
       cy.get('[placeholder="Password"]').clear().type(dataJson.password)
       cy.get('#login-button').click({force:true})
       cy.get('#header_container > div.header_secondary_container > div.right_component > span > select').select('Name (Z to A)')
       cy.get('#item_5_img_link > img').click({force:true})
       cy.get('#inventory_item_container > div > div > div.inventory_details_desc_container > div.inventory_details_name.large_size').should('have.text','Sauce Labs Fleece Jacket')
       cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click({force:true}) 
       cy.get('.shopping_cart_link').click({force:true}) 
       cy.url().should('contain','cart')                 //Check out
       cy.get('[data-test="remove-sauce-labs-fleece-jacket"]').click({force:true}) 
       cy.get('[data-test="continue-shopping"]').click({force:true})     
 })
 it('Select a product(Price (low to high))', function ()  // add product to cart and remove the product verifying empty cart
    {  
      cy.visit("https://www.saucedemo.com/") 
       cy.title().should('eq','Swag Labs')
       cy.get('#header_container > div.header_secondary_container > div.right_component > span > select').select('Price (low to high)')
       cy.get('#item_1_img_link > img').click({force:true})                   
       cy.get('[placeholder="Username"]').clear().type(dataJson.username4)      // goes to login again login with Fourth User ID 
       cy.get('[placeholder="Password"]').clear().type(dataJson.password)
       cy.get('#login-button').click({force:true})
       cy.get('#item_1_img_link > img').click({force:true})
       cy.get('#inventory_item_container > div > div > div.inventory_details_desc_container > div.inventory_details_name.large_size').should('have.text','Sauce Labs Bolt T-Shirt')
       cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click({force:true}) //Add to cart  : Cart status as 1
       cy.get('#back-to-products').click({force:true})  // Back to products
       cy.get('#react-burger-menu-btn').click({force:true})    // got to caert 
       cy.get('#reset_sidebar_link').click({force:true})      // remove product
       cy.get('.shopping_cart_link').click({force:true})  //Empty cart
       cy.url().should('contain','cart')                 //Check out  
    })
    it('Select a product(Price (high to low))', function ()  // check out credentials and verify validation
    {  
       cy.visit("https://www.saucedemo.com/")     
       cy.title().should('eq','Swag Labs')
       cy.get('[placeholder="Username"]').type(dataJson.username1)     //First User ID
       cy.get('[placeholder="Password"]').type(dataJson.password)
       cy.get('#login-button').click({force:true})
       cy.url().should('contain','inventory')
       cy.get('#header_container > div.header_secondary_container > div.right_component > span > select').select('Price (high to low)')
       cy.get('#item_0_img_link > img').click({force:true})
       cy.get('#inventory_item_container > div > div > div.inventory_details_desc_container > div.inventory_details_name.large_size').should('have.text','Sauce Labs Bike Light')
       cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click({force:true}) //Add to cart  : Cart status as 1
       cy.get('.shopping_cart_link').click({force:true}) 
       cy.url().should('contain','cart')                 //Check out
       cy.get('#checkout').click({force:true})
       cy.url().should('contain','checkout-step-one')      // check out credentials 
       // cy.get('#first-name').type(dataJson.firstname1)
       cy.get('#last-name').type(dataJson.lastname1)
       cy.get('#postal-code').type(dataJson.code1)
       cy.get('#continue').click({force:true})       
       cy.get('#checkout_info_container > div > form > div.checkout_info > div.error-message-container.error > h3').should('have.text','Error: First Name is required')
       cy.get('#first-name').type(dataJson.firstname1)
       cy.get('#last-name').clear()
       //cy.get('#postal-code').type(dataJson.code1)
       cy.get('#continue').click({force:true})
       cy.get('#checkout_info_container > div > form > div.checkout_info > div.error-message-container.error > h3').should('have.text','Error: Last Name is required')
       cy.get('#first-name').clear().type(dataJson.firstname1)
       cy.get('#last-name').type(dataJson.lastname1)
       cy.get('#postal-code').clear()
       cy.get('#continue').click({force:true})
       cy.get('#checkout_info_container > div > form > div.checkout_info > div.error-message-container.error > h3').should('have.text','Error: Postal Code is required')
    })    
    it('products and link verification on site pages', function(){
        cy.visit("https://www.saucedemo.com/")     
        cy.title().should('eq','Swag Labs')
        cy.get('[placeholder="Username"]').type(dataJson.username1)  
        cy.get('[placeholder="Password"]').type(dataJson.password)
        cy.get('#login-button').click({force:true})
        cy.url().should('contain','inventory')
        // Number of Products in that page 
        cy.get(".inventory_list>div").should("have.length","6")
        // number of social link presented
        cy.get(".social>li").should("have.length","3")
        cy.get('.social_twitter > a').invoke('removeAttr', 'target').click()
        cy.url().should('include', '/saucelabs')
        cy.go(-1)
        cy.get('.social_facebook > a').invoke('removeAttr', 'target').click()
        cy.url().should('include', '/saucelabs')
        cy.go(-1)
        cy.get('.social_linkedin > a').invoke('removeAttr', 'target').click()
        cy.url().should('include', '/sauce-labs')
    })
    it('invalid login credentials scenarios', function(){
        cy.visit("https://www.saucedemo.com/")     
        cy.title().should('eq','Swag Labs')
        // invalid login credentials
        cy.get('[data-test="username"]').type('Username') //incorrect UN
        cy.get('[data-test="password"]').type('Password') //incorrect PWD
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="error"]').contains('Epic sadface: Username and password do not match any user in this service').should('exist')
        cy.reload()
        cy.get('[data-test="username"]').type('standard_user') //correct UN
        cy.get('[data-test="password"]').type('SECRET_SAUCE') //incorrect pwd
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="error"]').contains('Epic sadface: Username and password do not match any user in this service').should('exist')
        cy.reload()
        cy.get('[data-test="username"]').type('@#$%^&')      //incorrect user name
        cy.get('[data-test="password"]').type('secret_sauce') //correct pwd
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="error"]').contains('Epic sadface: Username and password do not match any user in this service').should('exist') 
        cy.get("div[id='login_credentials'] >br").should("have.length","4")
    }) 
it('remove the product from cart and amount calculation' , function(){
    cy.visit("https://www.saucedemo.com/")     
    cy.title().should('eq','Swag Labs')
    cy.get("#user-name").should('be.visible').should('be.enabled').type('standard_user')
cy.wait(2000)
    cy.get("#password").should('be.visible').should('be.enabled').type('secret_sauce') 
    cy.wait(2000)
    cy.get('#login-button').should('be.visible').should('be.enabled').click()
    cy.wait(2000)
    //filter
    cy.get("#header_container > div.header_secondary_container > div.right_component > span > select").should('be.visible').should('be.enabled').select('Price (low to high)')
    cy.wait(2000)
    //backpack
    cy.get("#add-to-cart-sauce-labs-backpack").should('be.visible').should('be.enabled').click({force:true})
    cy.wait(2000)
    //bike light
    cy.get("#add-to-cart-sauce-labs-bike-light").should('be.visible').should('be.enabled').click({force:true})
    cy.wait(2000)
    //onesie tshirt
    cy.get("#add-to-cart-sauce-labs-onesie").should('be.visible').should('be.enabled').click({force:true})
    cy.wait(2000)
    cy.get("#shopping_cart_container > a").should('be.visible').click({force:true})
    cy.wait(2000)
    cy.get("#checkout").should('be.visible').should('be.enabled').click({force:true})
    cy.wait(2000)
  cy.get("#first-name").should('be.visible').should('be.enabled').type("software")
  cy.wait(2000)
  cy.get("#last-name").should('be.visible').should('be.enabled').type("tester")
  cy.wait(2000)
  cy.get("#postal-code").should('be.visible').should('be.enabled').type("639110")
  cy.wait(2000)
  cy.get("#continue").should('be.visible').should('be.enabled').click({force:true})
  cy.wait(2000)
  //payment information
  cy.contains("SauceCard #31337").should('be.visible')
  //shipping information
  cy.contains("FREE PONY EXPRESS DELIVERY!").should('be.visible')
  //item Amount
  cy.contains("47.97").should('be.visible')
  //tax amount
  cy.contains("3.84").should('be.visible')
  //Total Amount
  cy.contains("51.81").should('be.visible')
// removing the products from cart
cy.contains('Sauce Labs Backpack').click({force:true})
cy.contains('Remove').click({force:true})
cy.go('back')
cy.contains('Sauce Labs Bike Light').click({force:true})
cy.contains('Remove').click({force:true})
cy.go('back')
//verifying the amount and calculating the amount
//item Amount
cy.contains("7.99").should('be.visible')
//tax amount
cy.contains("8.63").should('be.visible')
//Total Amount
cy.contains("8.63").should('be.visible')
})
   })