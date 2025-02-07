Cypress.on('uncaught:exception', (err, runnable) => {
    return false
});
describe(' Api Testing Demo', function () {

    it('API intercept Testing', function () {
        cy.visit("https://jsonplaceholder.typicode.com/")
        cy.url().should('include', 'jsonplaceholder')
        cy.intercept({
            path :'/posts'
        }).as('posts')
        cy.get('body > div > main > table:nth-child(9) > tbody > tr:nth-child(1) > td:nth-child(2) > a').click()
        cy.wait('@posts').then(inter =>{
            cy.log(JSON.stringify(inter))
            console.log(JSON.stringify(inter))
            expect(inter.response.body).to.have.length(100)
        })
    })

    it('Intercept - MockingTest', function () { //FakeResponse  Static method
        cy.visit("https://jsonplaceholder.typicode.com/")
        cy.intercept('GET', '/posts', { totalpost: 5, name: 'Aswin' }).as('posts') //Return
        cy.get("body > div > main > table:nth-child(5) > tbody > tr:nth-child(1) > td:nth-child(1) > a") .click()
    })

    it('Intercept MockingTest using FixtureConcept', function () { //FakeResponse  Dynamic method
        cy.visit("https://jsonplaceholder.typicode.com/")
        cy.intercept('GET', '/posts', { fixture: 'Intercept.json' }).as('posts') //Return
        cy.get("body > div > main > table:nth-child(5) > tbody > tr:nth-child(1) > td:nth-child(1) > a") .click()
        cy.wait('@posts')
    })

    it('Intercept Test -comments', function () {
        cy.visit("https://jsonplaceholder.typicode.com/")
        cy.intercept({
           path: '/comments'
        }).as('comments')
        cy.get("body > div > main > table:nth-child(5) > tbody > tr:nth-child(2) > td:nth-child(1) > a").click()
        cy.wait('@comments').then(data => {
            cy.log(JSON.stringify(data))
            console.log(JSON.stringify(data))
            expect(data.response.body).to.have.length(500)
        })
    })
it('Intercept Test for COMMENTS using FixtureConcept', function () { //FakeResponse Dynamic method
        cy.visit("https://jsonplaceholder.typicode.com/")
        cy.intercept('GET', '/comments', { fixture: 'Intercept.json' }).as('comments') //Return
        cy.get("body > div > main > table:nth-child(5) > tbody > tr:nth-child(2) > td:nth-child(1) > a").click()
        cy.wait('@comments')
    })


    it('API intercept Testing - ALBUMS', function () {
        cy.visit("https://jsonplaceholder.typicode.com/")
        cy.intercept({
            path: '/albums' 
        }).as('albums')
        cy.get("body > div > main > table:nth-child(5) > tbody > tr:nth-child(3) > td:nth-child(1) > a")
            .click()
        cy.wait('@albums').then(inter => {
            cy.log(JSON.stringify(inter))
            console.log(JSON.stringify(inter))
            expect(inter.response.body).to.have.length(100)
        })
    })

    it('Intercept Test for ALBUMS using FixtureConcept', function () { //FakeResponse Dynamic method
        cy.visit("https://jsonplaceholder.typicode.com/")
        cy.intercept('GET', '/albums', { fixture: 'Intercept.json' }).as('albums') //Return
        cy.get("body > div > main > table:nth-child(5) > tbody > tr:nth-child(3) > td:nth-child(1) > a").click()
        cy.wait('@albums')
    })

    it('API intercept Testing - PHOTOS', function () {
        cy.visit("https://jsonplaceholder.typicode.com/")
        cy.intercept({
            path: '/photos'
        }).as('photos')
        cy.get("body > div > main > table:nth-child(5) > tbody > tr:nth-child(4) > td:nth-child(1) > a")
            .click()
        cy.wait('@photos').then(inter => {
            cy.log(JSON.stringify(inter))
            console.log(JSON.stringify(inter))
            expect(inter.response.body).to.have.length(5000)
        })
    })

    it('Intercept Test for PHOTOS using FixtureConcept', function () { //FakeResponse Dynamic method
        cy.visit("https://jsonplaceholder.typicode.com/")
        cy.intercept('GET', '/photos', { fixture: 'Intercept.json' }).as('photos') //Return
        cy.get("body > div > main > table:nth-child(5) > tbody > tr:nth-child(4) > td:nth-child(1) > a").click()
        cy.wait('@photos')
    })

    it('API intercept Testing - USERS', function () {
        cy.visit("https://jsonplaceholder.typicode.com/")
        cy.intercept({
            path: '/users'
        }).as('users')
        cy.get("body > div > main > table:nth-child(5) > tbody > tr:nth-child(6) > td:nth-child(1) > a")
            .click()
        cy.wait('@users').then(inter => {
            cy.log(JSON.stringify(inter))
            console.log(JSON.stringify(inter))
            expect(inter.response.body).to.have.length(10)
        })
    })

    it('Intercept Test for USERS using FixtureConcept', function () { //FakeResponse Dynamic method
        cy.visit("https://jsonplaceholder.typicode.com/")
        cy.intercept('GET', '/users', { fixture: 'Intercept.json' }).as('users') //Return
        cy.get("body > div > main > table:nth-child(5) > tbody > tr:nth-child(6) > td:nth-child(1) > a").click()
        cy.wait('@users')
    })

    it('API intercept Testing - TODOS', function () {
        cy.visit("https://jsonplaceholder.typicode.com/")
        cy.intercept({
            path: '/todos'
        }).as('todos')
        cy.get("body > div > main > table:nth-child(5) > tbody > tr:nth-child(5) > td:nth-child(1) > a")
            .click()
        cy.wait('@todos').then(inter => {
            cy.log(JSON.stringify(inter))
            console.log(JSON.stringify(inter))
            expect(inter.response.body).to.have.length(200)
        })
    })

    it('Intercept Test for TODOS using FixtureConcept', function () { //FakeResponse Dynamic method
        cy.visit("https://jsonplaceholder.typicode.com/")
        cy.intercept('GET', '/todos', { fixture: 'Intercept.json' }).as('todos') //Return
        cy.get("body > div > main > table:nth-child(5) > tbody > tr:nth-child(5) > td:nth-child(1) > a").click()
        cy.wait('@todos')
    })
})
