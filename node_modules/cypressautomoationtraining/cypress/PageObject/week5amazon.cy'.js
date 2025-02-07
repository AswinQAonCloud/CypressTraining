class Amazon {


    createAccount(){
    
        cy.get('#nav-link-accountList').should('be.visible').click('center')
        cy.contains("Create your Amazon account").click({force:true})
     
    }
    newAccountName(value){
        cy.get("#ap_customer_name").should('be.visible').type(value).should("have.value",value)
        
    }
        newAccountNumber(value){
        cy.get("#ap_phone_number").should('be.visible').type(value).should("have.value",value)
    }
    newAccountEmail(value){
        cy.get("#ap_email").should('be.visible').type(value).should("have.value",value)
    }
        newAccountPassword(value){
        cy.get("#ap_password").should('be.visible').type(value).should("have.value",value)
    }
    newAccountReEnterPassword(value){
        cy.get('#ap_password_check').should('be.visible').type(value).should("have.value",value)
    }
     signup(){
        cy.get('#nav-link-accountList').should('be.visible').click('center')
        cy.url().should('include','signin?openid')
        cy.title(). should('eq', 'Amazon Sign-In')
    }
    signupwithInvalidEmail(value){
        cy.get("#ap_email").should('be.visible').type(value).should("have.value",value)
        cy.wait(3000)
        cy.get('.a-button-inner > #continue').click()
      
    }
    signupwithInvalidNumber(value){
        cy.reload()
        cy.get("#ap_email").clear() 
        cy.get("#ap_email").should('be.visible').type(value).should("have.value",value)
        cy.wait(3000)
        cy.get('.a-button-inner > #continue').click()
    }
    
    signinwithInvalidPassword(value){
        cy.get("#ap_password").should('be.visible').type(value).should("have.value",value)
        cy.get("#signInSubmit").click()  
    }
    signinwithvalidPassword(value){
        cy.get("#ap_password").should('be.visible').type(value).should("have.value",value)
        cy.get("#signInSubmit").click() 
    }
    signupwithEmail(value){
        cy.get("#ap_email").should('be.visible').type(value).should("have.value",value)
        cy.wait(3000)
        cy.get('.a-button-inner > #continue').click()
    }
    signupwithphoneNumber(value){
        cy.get("#ap_email").should('be.visible').type(value).should("have.value",value)
        cy.wait(3000)
        cy.get('.a-button-inner > #continue').click()
    }
    
    
    
    }
    export default Amazon