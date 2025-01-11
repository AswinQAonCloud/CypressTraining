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


Cypress.Commands.add('contactpage',()=>{
    cy.visit("https://vignesh-tester18.github.io/pageforbikers/mypage.html")
    cy.get("input[name=alpha]").type("vigneshwaran")
    cy.get("body > form > div:nth-child(5) > input[type=number]").type(8428670305,{sensitive:true})
    cy.get("body > form > div:nth-child(11) > textarea").type("page for bike trip")
})


Cypress.Commands.overwrite('type',(originalFn,element,text,options)=>{
    if(options && options.sensitive){
        options.log=false
    }
    return originalFn(element,text,options)
    
})
