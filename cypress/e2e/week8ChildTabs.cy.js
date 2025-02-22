describe("Handling Child Tabs",()=>{


    it("Handle a child tab with invoke 1",()=>{
        cy.visit("https://the-internet.herokuapp.com/windows")
        cy.url().should('eq','https://the-internet.herokuapp.com/windows')
        cy.get('.example > a').invoke('removeAttr','target').click()  
        cy.url().should('eq','https://the-internet.herokuapp.com/windows/new')
        cy.wait(3000)
        cy.go('back')
        cy.url().should('eq','https://the-internet.herokuapp.com/windows')
    })

    it("Handle a child tab with invoke 2",()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")  
        cy.title().should('be.equal','Practice Page')
        cy.get('#opentab').invoke('removeAttr','target').click()  
        cy.url().should('eq','https://www.qaclickacademy.com/')
        cy.wait(3000)
        cy.go('back')
        cy.url().should('eq','https://rahulshettyacademy.com/AutomationPractice/')
    })

    it("Handle child Tabs href attribute 1",()=>{
        cy.visit("https://the-internet.herokuapp.com/windows")
        cy.url().should('eq','https://the-internet.herokuapp.com/windows')
        cy.get('.example > a').then((win)=>{
            let url=win.prop('href')
            cy.visit(url)
        })
        cy.url().should('eq','https://the-internet.herokuapp.com/windows/new')
        cy.wait(3000)
        cy.go('back')
        cy.url().should('eq','https://the-internet.herokuapp.com/windows')
    })
    
    it("Handle child Tabs href attribute 2",()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.title().should('be.equal','Practice Page')
        cy.get('#opentab').then((e)=>{
            let url=e.prop('href')
            cy.visit(url)
        })
        cy.url().should('eq','https://www.qaclickacademy.com/')
        cy.wait(3000)
        cy.go('back')
        cy.url().should('eq','https://rahulshettyacademy.com/AutomationPractice/')
    })

})