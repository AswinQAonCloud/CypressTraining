describe('Handling windows tab', () => {

    it('Handling new Browser Tab', function () {
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('.example > a').invoke('removeAttr', 'target').click()
        cy.url()
            .should('include', '/windows/new')
        cy.get('h3')
            .should('have.text', 'New Window')
    })

    it('Handling new Browser Window', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.window().then((win) => {
            cy.stub(win, 'open', url => {
                win.location.href = 'http://www.qaclickacademy.com/';
            }).as("popup")
        })
        cy.get('#openwindow').click()
        cy.get('@popup') .should("be.called")
        cy.title().should('eq','QAClick Academy - A Testing Academy to Learn, Earn and Shine')
    })
})