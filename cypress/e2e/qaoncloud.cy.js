Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

describe('QAonCloud Website',function(){

    it('Visit the page and verify the title',function(){
        cy.visit("https://www.qaoncloud.com")
        cy.title().should('eq','QA Testing Services | Software Testing Services - QAonCloud')
    })

    it('Navigating to the Headers and Dropdowns ',function(){
        cy.visit("https://www.qaoncloud.com")
        cy.get('.elementskit-menu-hamburger > :nth-child(3)').click()
        cy.get('#menu-item-319 > .ekit-menu-nav-link > .icon').click()
        cy.get('.elementor-element-4eceb4cb > .elementor-widget-container').click()
        cy.get('#navbarDropdown1').click()
        cy.wait(2000)
        cy.get(':nth-child(1) > .dropdown-menu > :nth-child(1) > :nth-child(1) > :nth-child(1) > .dropdown-item').click()
        cy.get('#navbarDropdown1').click()
        cy.wait(2000)
        cy.get(':nth-child(1) > .dropdown-menu > :nth-child(1) > :nth-child(1) > :nth-child(2) > .dropdown-item').click()
        cy.get('#navbarDropdown1').click()
        cy.wait(2000)
        cy.get(':nth-child(1) > .dropdown-menu > :nth-child(1) > .menu-border > :nth-child(1) > .dropdown-item').click()
        cy.get('#navbarDropdown2').click()
        cy.wait(2000)
        cy.get('#navbarDropdown3').click()
        cy.wait(2000)
        cy.get('#navbarDropdown4').click()
        cy.wait(2000)    
    })

    it('Navigating to the Insights Header (blogs)',function(){
        cy.visit("https://www.qaoncloud.com")
        cy.get('.elementskit-menu-hamburger > :nth-child(3)').click()
        cy.get('#menu-item-319 > .ekit-menu-nav-link > .icon').click()
        cy.get('.elementor-element-4eceb4cb > .elementor-widget-container').click()
        cy.get('#navbarDropdown4').click()
        cy.wait(2000)
        cy.get(':nth-child(4) > .dropdown-menu > :nth-child(1) > ul > :nth-child(1) > .dropdown-item').click()
        cy.wait(2000)
        cy.get('#navbarDropdown4').click()
        cy.get(':nth-child(4) > .dropdown-menu > :nth-child(1) > ul > :nth-child(2) > .dropdown-item').click()        
        cy.get('#navbarDropdown4').click()
        cy.get(':nth-child(4) > .dropdown-menu > :nth-child(1) > ul > :nth-child(3) > .dropdown-item').click()
        cy.wait(2000)
        cy.get('#navbarDropdown4').click()
        cy.get(':nth-child(4) > .dropdown-menu > :nth-child(1) > ul > :nth-child(4) > .dropdown-item').click()
        cy.wait(2000)
    })

    
    it('Contact US form ', function(){
        cy.visit("https://www.qaoncloud.com")
        cy.get(".elementor-button-text").click() //Contact US
        cy.get('form > [name="name"]').type('QA testing')
        cy.get('form > [name="email"]').type('qaengineer@qaoncloud.com ')
        cy.get('form > .onlyNumber').type('123234435454')
        cy.get('form > [name="companyname"]').type('QAonCloud')
        cy.get('form > [name="role"]').type('QA Engineer')
        cy.get('form > textarea.form-control').type('Test the applications that is developed by our dev steam')
        cy.get('.recaptcha-checkbox-border').check().should('be.visible')
        //cy.get('.contact-send > .btn').click()
    })

    it('footer',function(){
        cy.visit("https://www.qaoncloud.com/")
        cy.scrollTo(0, 9500)
  
    // social media links
    cy.xpath("//ul[@class='ekit_social_media']//li").should('be.visible')
    .should('have.length','6')


    cy.contains("About Us").should('be.visible').click({force:true})
    cy.url().should('include', 'about-us')
    cy.go("back")

    cy.contains("How it works").should('be.visible').click({force:true})
    cy.url().should('include', 'how-we-work')
    cy.go("back")
    
    cy.contains("Why Us").should('be.visible').click({force:true})
    cy.url().should('include', 'why-us')
    cy.go("back")
    
    cy.contains("Engagement & Pricing").should('be.visible').click({force:true})
    cy.url().should('include', 'engagement-model')
    cy.go("back")

    cy.contains("Careers").should('be.visible').click({force:true})
    cy.url().should('include', 'careers')
    cy.go("back")

    cy.contains("Tools we use").should('be.visible').click({force:true})
    cy.url().should('include', 'tools-we-use')
    cy.go("back")

    cy.contains("Contact-us").should('be.visible').click({force:true})
    cy.url().should('include', 'contact-us')
    cy.go("back")

    cy.contains("Privacy Policy").should('be.visible').click({force:true})
    cy.url().should('include', 'privacy-policy')
    cy.go("back")

    cy.contains("Terms & Condition").should('be.visible').click({force:true})
    cy.url().should('include', 'terms-of-use')
    cy.go("back")
    
    })

})
    
