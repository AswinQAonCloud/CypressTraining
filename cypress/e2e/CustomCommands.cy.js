
describe('customcommands',function(){
    it('Orangehrm login',function(){
   
        cy.orangehrm('Admin','admin123')
        cy.title().should('be.equal','OrangeHRM')
    })


    it('checking added admins',function(){
        cy.orangehrm('Admin','admin123')
        cy.title().should('be.equal','OrangeHRM')
    })


    it('Invalid credentials check',function(){
       
        cy.orangehrm('vigneshwaran','admin')
        cy.title().should('be.equal','OrangeHRM')
    })
})
