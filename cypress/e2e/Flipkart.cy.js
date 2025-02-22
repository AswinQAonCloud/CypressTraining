Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})
describe('Flipkart Website',function(){
    beforeEach(function(){
        cy.visit('https://www.flipkart.com/',{failOnStatusCode: false})
    })
    it('Signup',function(){
        //cy.visit('https://www.flipkart.com/')
        cy.get('#container > div > div._1kfTjk > div._1rH5Jn > div._2Xfa2_ > div.go_DOp._2errNR > div > div').trigger('mouseover')
        cy.wait(5000)
        cy.get('._3wJI0x').click()//sign up
        cy.contains("Looks like you're new here!").should('be.visible')
        cy.contains('Sign up with your mobile number to get started').should('be.visible')
        cy.get('body > div._2Sn47c > div > div > div > div > div._36HLxm.col.col-3-5 > div > form > div.IiD88i._351hSN > input').type('xxx')
        cy.get('._3AWRsL').click()//continue
        //otp
        cy.get('body > div._2Sn47c > div > div > div > div > div._36HLxm.col.col-3-5 > div > form > div:nth-child(3) > input').type('xx')
        //password
        cy.get('body > div._2Sn47c > div > div > div > div > div._36HLxm.col.col-3-5 > div > form > div:nth-child(4) > input').type('xx')
        //signup button
        cy.get('body > div._2Sn47c > div > div > div > div > div._36HLxm.col.col-3-5 > div > form > div._1D1L_j > button._2KpZ6l._2HKlqd._3AWRsL').click()
        cy.get('._2YULOR > span').should('be.visible')//assert
        //cy.get(':nth-child(2) > ._2IX_2-').type('xx@')
        //cy.get('._1D1L_j > ._2KpZ6l').click()
        
    })
    it('Negative-Login with invalid userid',function(){
        //cy.visit('https://www.flipkart.com/')
        //login button
        cy.get('#container > div > div._1kfTjk > div._1rH5Jn > div._2Xfa2_ > div.go_DOp._2errNR > div > div > div > a').click()
        cy.get('._36KMOx > span').should('be.visible')//login
        //invalid mobile number
        cy.get('body > div._2Sn47c > div > div > div > div > div._36HLxm.col.col-3-5 > div > form > div:nth-child(1) > input').type('93&^%$#2as')
        cy.get('body > div._2Sn47c > div > div > div > div > div._36HLxm.col.col-3-5 > div > form > div._1D1L_j > button').click()
        cy.contains('Please enter valid Email ID/Mobile number').should('be.visible')
        
    })
    it('Negative-Login with invalid password',function(){
        //cy.visit('https://www.flipkart.com/')
        cy.get('#container > div > div._1kfTjk > div._1rH5Jn > div._2Xfa2_ > div.go_DOp._2errNR > div > div > div > a').click()//login button
        cy.get('._36KMOx > span').should('be.visible')//login
        cy.contains('Get access to your Orders, Wishlist and Recommendations').should('be.visible')
        //mobile number
        cy.get('body > div._2Sn47c > div > div > div > div > div._36HLxm.col.col-3-5 > div > form > div:nth-child(1) > input').type('xx')
        //password
        cy.get('body > div._2Sn47c > div > div > div > div > div._36HLxm.col.col-3-5 > div > form > div:nth-child(2) > input').type('xx@')
        //login button
        cy.get('body > div._2Sn47c > div > div > div > div > div._36HLxm.col.col-3-5 > div > form > div._1D1L_j > button').click()
        cy.get('._2YULOR > span').should('be.visible')//asserting alert message
    })
    it('Login',function(){
        //cy.visit('https://www.flipkart.com/')
        //login button
        cy.get('#container > div > div._1kfTjk > div._1rH5Jn > div._2Xfa2_ > div.go_DOp._2errNR > div > div > div > a').click()
        cy.get('._36KMOx > span').should('be.visible')//login
        cy.contains('Get access to your Orders, Wishlist and Recommendations').should('be.visible')
        //mobile number
        cy.get('body > div._2Sn47c > div > div > div > div > div._36HLxm.col.col-3-5 > div > form > div:nth-child(1) > input').type('xx')
        //password
        //cy.get('body > div._2Sn47c > div > div > div > div > div._36HLxm.col.col-3-5 > div > form > div:nth-child(2) > input').type('xxx@')
        //to get otp
        cy.get('body > div._2Sn47c > div > div > div > div > div._36HLxm.col.col-3-5 > div > form > div._1k3JO2 > button').click()
        //cy.wait(10000)
        //cy.contains('xxx').should('be.visible')
        //cy.get('._2YULOR > span').should('be.visible')
    }) 
    it('To search products',function(){
        //search button
        cy.get('#container > div > div._1kfTjk > div._1rH5Jn > div._2Xfa2_ > div._1cmsER > form > div > div > input').clear()
        cy.get('#container > div > div._1kfTjk > div._1rH5Jn > div._2Xfa2_ > div._1cmsER > form > div > div > input').type('redmi 10 mobile {enter}')
        cy.get('[data-id="MOBGC9GYQGGKWEU3"] > ._2kHMtA > ._1fQZEK > ._3pLy-c > .col-7-12 > ._4rR01T').should('be.visible')
        //search button
        cy.get('#container > div > div._1kfTjk > div._1rH5Jn > div._2Xfa2_ > div._1cmsER > form > div > div > input').clear()
        cy.get('#container > div > div._1kfTjk > div._1rH5Jn > div._2Xfa2_ > div._1cmsER > form > div > div > input').type('lg tv {enter}')
        cy.get('[data-id="TVSFTW4CSRW8PGDQ"] > ._2kHMtA > ._1fQZEK > ._3pLy-c > .col-7-12 > ._4rR01T').should('be.visible')
        //search button
        cy.get('#container > div > div._1kfTjk > div._1rH5Jn > div._2Xfa2_ > div._1cmsER > form > div > div > input').clear()//search button
        cy.get('#container > div > div._1kfTjk > div._1rH5Jn > div._2Xfa2_ > div._1cmsER > form > div > div > input').type('mac lap {enter}')
        cy.contains('APPLE 2020 Macbook Air M1 - (8 GB/256 GB SSD/Mac OS Big Sur) MGN63HN/A').should('be.visible')
        //search button
        cy.get('#container > div > div._1kfTjk > div._1rH5Jn > div._2Xfa2_ > div._1cmsER > form > div > div > input').clear()//search button
        cy.get('#container > div > div._1kfTjk > div._1rH5Jn > div._2Xfa2_ > div._1cmsER > form > div > div > input').type('cycle {enter}')
        cy.get('[data-id="CCEG4ZWZZVSNJTHX"] > ._4ddWXP > .s1Q9rs').should('be.visible')
        //search button
        cy.get('#container > div > div._1kfTjk > div._1rH5Jn > div._2Xfa2_ > div._1cmsER > form > div > div > input').clear()//search button
        cy.get('#container > div > div._1kfTjk > div._1rH5Jn > div._2Xfa2_ > div._1cmsER > form > div > div > input').type('mouse {enter}')
        cy.get('#container > div > div._36fx1h._6t1WkM._3HqJxg > div._1YokD2._2GoDe3 > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(1) > div > a.s1Q9rs').should('be.visible')


    })
    it('To search products with price range',function(){
        //search button
        cy.get('#container > div > div._1kfTjk > div._1rH5Jn > div._2Xfa2_ > div._1cmsER > form > div > div > input').clear()//search button
        cy.get('#container > div > div._1kfTjk > div._1rH5Jn > div._2Xfa2_ > div._1cmsER > form > div > div > input').type('mouse {enter}')
        cy.get('#container > div > div._36fx1h._6t1WkM._3HqJxg > div._1YokD2._2GoDe3 > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(1) > div > a.s1Q9rs').should('be.visible')
        cy.get('._3uDYxP > ._2YxCDZ').select('₹1000')
        cy.get('[data-id="ACCFKJ7WGWCF9MZW"] > ._4ddWXP > ._8VNy32 > ._25b18c > ._30jeq3').should('be.visible')
        cy.wait(5000)
        //min value
        cy.get('._1YAKP4 > ._2YxCDZ').select('₹250')
        //max value
        cy.get('._3uDYxP > ._2YxCDZ').select('₹5000')
        cy.get('._3ztiZO').should('be.visible')
    })
    it('To search products with popularity and star rating',function(){
        //search button
        cy.get('#container > div > div._1kfTjk > div._1rH5Jn > div._2Xfa2_ > div._1cmsER > form > div > div > input').clear()
        cy.get('#container > div > div._1kfTjk > div._1rH5Jn > div._2Xfa2_ > div._1cmsER > form > div > div > input').type('lg tv {enter}')
        cy.get('[data-id="TVSFTW4CSRW8PGDQ"] > ._2kHMtA > ._1fQZEK > ._3pLy-c > .col-7-12 > ._4rR01T').should('be.visible')
        //popularity
        cy.get('._5THWM1 > :nth-child(3)').click()
        cy.get(':nth-child(15) > ._213eRC > ._2gmUFU').scrollIntoView()
        //star rating
        cy.get('[title="1★ & above"] > ._1Y4Vhm > ._2iDkf8 > ._24_Dny').click()
        cy.get('._3ztiZO').should('be.visible')
    
    })
    it('To search products with price range',function(){
        //search button
        cy.get('#container > div > div._1kfTjk > div._1rH5Jn > div._2Xfa2_ > div._1cmsER > form > div > div > input').clear()
        cy.get('#container > div > div._1kfTjk > div._1rH5Jn > div._2Xfa2_ > div._1cmsER > form > div > div > input').type('redmi 10 mobile {enter}')
        cy.get('[data-id="MOBGC9GYQGGKWEU3"] > ._2kHMtA > ._1fQZEK > ._3pLy-c > .col-7-12 > ._4rR01T').should('be.visible')
        //to sort product from low to high price
        cy.get('._5THWM1 > :nth-child(4)').click()
        cy.contains('Next').scrollIntoView()
        cy.wait(2000)
        cy.contains('Price -- High to Low').scrollIntoView()
        //to sort products from high to low price
        cy.contains('Price -- High to Low').click()


        
    })
    it('To search products',function(){
        cy.get('#container > div > div._1kfTjk > div._1rH5Jn > div._2Xfa2_ > div._1cmsER > form > div > div > input').clear()//search button
        cy.get('#container > div > div._1kfTjk > div._1rH5Jn > div._2Xfa2_ > div._1cmsER > form > div > div > input').type('mac lap {enter}')
        cy.wait(4000)
        cy.contains('APPLE 2020 Macbook Air M1 - (8 GB/256 GB SSD/Mac OS Big Sur) MGN63HN/A').should('be.visible')
        cy.get('._5THWM1 > :nth-child(6)').click()
        cy.wait(4000)
        cy.get('[data-id="COMGFB2GWHPVFMJW"] > ._2kHMtA > ._1fQZEK > ._3pLy-c > .col-7-12 > ._4rR01T').should('be.visible')
        })
})
