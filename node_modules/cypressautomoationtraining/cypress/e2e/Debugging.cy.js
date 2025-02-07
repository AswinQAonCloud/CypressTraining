Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

describe('degugging', () => {


    it('Debug Cypress Tests using the Debugger', () => {

        alert('Debug Cypress Tests using the Debugger')

        // registration
        cy.visit("https://angular-7-registration-login-example.stackblitz.io/login?returnUrl=%2F")
        cy.wait(10000)
        cy.get('button').click();
            cy.get('.btn-link').click();
            cy.url().should('include', '/register')
              cy.get('body > app > div.jumbotron > div > div > div > ng-component > form > div:nth-child(1) > input').type('software');
              cy.get('body > app > div.jumbotron > div > div > div > ng-component > form > div:nth-child(2) > input').type('tester');
              cy.get('body > app > div.jumbotron > div > div > div > ng-component > form > div:nth-child(3) > input').type('qa');
              cy.get('body > app > div.jumbotron > div > div > div > ng-component > form > div:nth-child(4) > input').type('test@123');
              cy.log('verify user Registration').then($element => {
                debugger
            })
              cy.get('.btn-primary').click();
              cy.wait(10000)
              cy.get('alert').should('have.text','Registration successful')

        // Login
        cy.get("input[type='text']").type('qa');
        cy.get("input[type='password']").type('test@123');
        cy.log('verify User Login').then($element => {
            debugger
        })
        cy.get('.btn-primary').click();

    });


    it('Debug Cypress with .debug() option', () => {

        cy.visit("https://angular-7-registration-login-example.stackblitz.io/login?returnUrl=%2F")
        cy.wait(10000)
        cy.get('button').click();
            cy.get('.btn-link').click();
            cy.url().should('include', '/register')
              cy.get('body > app > div.jumbotron > div > div > div > ng-component > form > div:nth-child(1) > input').type('software')
              cy.get('body > app > div.jumbotron > div > div > div > ng-component > form > div:nth-child(2) > input').type('tester');
              cy.get('body > app > div.jumbotron > div > div > div > ng-component > form > div:nth-child(3) > input').type('qa');
              cy.get('body > app > div.jumbotron > div > div > div > ng-component > form > div:nth-child(4) > input').type('test@123');
              cy.get('.btn-primary').click().debug()
              cy.log('registration completed')
              cy.get('alert') .should('have.text','Registration successful')

    });
it('debug using pause', () => {

        cy.visit("https://angular-7-registration-login-example.stackblitz.io/login?returnUrl=%2F")
        cy.wait(10000)
        cy.get('button').click();
            cy.get('.btn-link').click();
            cy.url().should('include', '/register')
            cy.pause();
              cy.get('body > app > div.jumbotron > div > div > div > ng-component > form > div:nth-child(1) > input').type('software')
              cy.get('body > app > div.jumbotron > div > div > div > ng-component > form > div:nth-child(2) > input').type('tester');
              cy.get('body > app > div.jumbotron > div > div > div > ng-component > form > div:nth-child(3) > input').type('qa');
              cy.get('body > app > div.jumbotron > div > div > div > ng-component > form > div:nth-child(4) > input').type('test@123');
              cy.pause();
              cy.get('.btn-primary').click()
              cy.get('alert') .should('have.text','Registration successful')
              cy.log('registration completed')
    })


    it('Using logs and console logs', () => {

        cy.visit('https://www.browserstack.com/');
        cy.get('.sign-in-link > .bstack-mm-link').then((body) => {

            console.log('Finding the text for the element',body.text())
            cy.log('Finding the text for the element',body.text())

            if (body.text().includes('Sign in')) {
                cy.log('Sign in text found in SignIn button')
                console.log('Sign in text found in SignIn button')
            }
            else {
                cy.log('Sign in text not found in SignIn button')
                console.log('Sign in text not found in SignIn button')
            }

            if (body.text().includes('Login in')) {
                cy.log('Login in text found in SignIn button')
                console.log('Login in text found in SignIn button')
            }
            else {
                cy.log('Login in text not found in SignIn button')
                console.log('Login in text not found in SignIn button')
            }
        })

    })
    

})
