// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

///// <reference types="Cypress-xpath" />
require('cypress-xpath');
import 'cypress-file-upload';
require('cypress-iframe');                  
require('cypress-downloadfile/lib/downloadFileCommand')
require('cypress-drag-drop')


Cypress.Commands.add('orangehrm', (email, password) => { 
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.get("input[name=username]").type(email)
    cy.get("input[name=password]").type(password)
    cy.get("button[type=submit]").click()


})


//child
Cypress.Commands.add('text', { prevSubject: 'element'}, (prevsub) => { 
    return prevsub.text();
    //cy.wrap(prevsub.text());
 })
 //parent
 Cypress.Commands.add('cellvalue',(rows, col) => { 
    //return cellvalue(rows,col)
    cy.get("table#table1>tbody>tr:nth-child(${rows})>td:nth-child(${col})").then(
        (el) =>{
        cy.wrap(el.text())
    })


 })
 //child
 Cypress.Commands.add('iframe', { prevSubject: 'element'}, (iframe) => { 
    return new Cypress.Promise((resolve) => {
iframe.ready(()=>{
    resolve(iframe.contents().find('body'))
})
     })
 })

Cypress.Commands.overwrite('type',(originalFn,element,text,options)=>{
    if(options && options.sensitive){
        options.log=false
    }
    return originalFn(element,text,options)
    
})


Cypress.Commands.add('getIframe',(iframe)=>{
    return cy.get(iframe)
          .its('0.contentDocument.body')
          .should('be.visible')
          .then(cy.wrap)
  })
  

// week 8 custom commands
Cypress.Commands.add("visitRegisterPage", () => {
    cy.visit('https://demo.automationtesting.in/Register.html')
    cy.wait(4000)
})

Cypress.Commands.add("verifyTitle", () => {
    cy.title().should('eq', 'Register')
})

Cypress.Commands.add("enterFirstname", (value) => {
    cy.get('#basicBootstrapForm > div:nth-child(1) > div:nth-child(2) > input').type(value)
})

Cypress.Commands.add("enterLastname", (value) => {
    cy.get('#basicBootstrapForm > div:nth-child(1) > div:nth-child(3) > input').type(value)
})

Cypress.Commands.add("enterAddress", (value) => {
    cy.get('#basicBootstrapForm > div:nth-child(2) > div > textarea').type(value)
})

Cypress.Commands.add("enterEmail", (value) => {
    cy.get('input[type=email]').type(value)
})

Cypress.Commands.add("enterPhone", (value) => {
    cy.get('input[type=tel]').type(value)
})

Cypress.Commands.add("selectGender", () => {
    cy.get('#basicBootstrapForm > div:nth-child(5) > div > label:nth-child(1) > input').click()
})

Cypress.Commands.add("selectHobbies", () => {
    cy.get('#checkbox1').click()
    cy.get('#checkbox2').click()
    cy.get('#checkbox3').click()
})

Cypress.Commands.add("selectLanguage", (value) => {
    cy.get('.ui-corner-all').contains(value).click()
})

Cypress.Commands.add("selectSkill", (value) => {
    cy.get('#Skills').select(value)
    cy.get("select[id='Skills'] option:nth-child(1)").should('have.text', 'Select Skills')
})

Cypress.Commands.add("selectCountry", (value) => {
    cy.get('.select2-search__field').type(value).type('{enter}')
})

Cypress.Commands.add("validateInvalidCountry", (value) => {
    cy.get('.select2-search__field').type(value)
    cy.get("li[role='treeitem']").should('have.text', 'No results found')
})

Cypress.Commands.add("selectCountryDropdown", () => {
    cy.get('span[role=combobox]').click({ force: true })
})

Cypress.Commands.add("selectYear", (value) => {
    cy.get('#yearbox').select(value)
})

Cypress.Commands.add("selectMonth", (value) => {
    cy.get('#basicBootstrapForm > div:nth-child(11) > div:nth-child(3) > select').select(value)
})

Cypress.Commands.add("selectDay", (value) => {
    cy.get('#daybox').select(value)
})

Cypress.Commands.add("enterPassword", (value) => {
    cy.get('#firstpassword').type(value)
})

Cypress.Commands.add("confirmPassword", (value) => {
    cy.get('#secondpassword').type(value)
})

Cypress.Commands.add("clickSubmit", () => {
    cy.get('#submitbtn').click()
})

Cypress.Commands.add("handlePopup", () => {
    cy.on('window:alert', (x) => {
        expect(x).to.contains('Please fill out this field.')
    })
})

Cypress.Commands.add("uploadFile", () => {
    const image = 'QAonCloudLogo.png'
    cy.get("#imagesrc").should('be.enabled').attachFile(image)
})

  

// week 8 custom commands
  