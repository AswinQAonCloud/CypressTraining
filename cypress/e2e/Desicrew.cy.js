Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
})
describe('DesiCrew ', () => {

    it('DesiCrew loginpage invalid', () => {
        cy.visit('https://desicrewdtrial.crystalhr.com/Account/Login?returnUrl=%2FHome%2FIndex')
        cy.get('#login-box > div > h4').should('be.visible')
        cy.get('#Username').type('DC4')
        cy.get('#Password').type('test')
        cy.get('#btnLogin').click()
        cy.get('#frmLogin > fieldset > div.toolbar.clearfix > div > a').click()
        cy.get('#btnReset').should('be.visible')
        cy.get('#forgot-box > div.center > a').click()
    })
    it('DesiCrew valid loginpage', () => {
        cy.visit('https://desicrewdtrial.crystalhr.com/Account/Login?returnUrl=%2FHome%2FIndex')
        cy.get('#login-box > div > h4').should('be.visible')
        cy.get('#Username').type('DC4913')
        cy.get('#Password').type('aswinkumar@ak1070')
        cy.get('#btnLogin').click()
        
    })  
})