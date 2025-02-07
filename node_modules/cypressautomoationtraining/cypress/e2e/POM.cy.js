

import Rediff from "../PageObject/Rediff register.cy.js";
 
describe('Pom suite',function(){
    it('entering credential',function(){
        const credential=new Rediff()
        credential.visit()
        credential.name('Aswin Kumar')
        credential.rediffid('test123')
        credential.password('Testing@1234')
        credential.repassword('Testing@1234')
        credential.alter('testing12318@gmail.com')
        credential.mobno('123456789')
        credential.date('18')
        credential.month('JAN')
        credential.year('1998')
        credential.gender()
        credential.country('India')
        credential.city('Coimbatore')
        credential.captcha()
        cy.wait(10000)
        credential.submit()
        cy.title().should('eq','Rediffmail Free Unlimited Storage')
    })
 
})
