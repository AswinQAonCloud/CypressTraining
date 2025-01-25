describe ('Capturing screenshot and video', function (){


    it('Capture screenshot manually', function () {

    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    //complete page screenshot with filename - CompletePage
    cy.screenshot('CompletePage')
    //screenshot of particular element
    cy.get(':nth-child(2) > button').screenshot('Element')
})


it('Capture screenshot and video', function () {

    cy.visit("https://demo.opencart.com/admin/index.php?route=common/login")
    cy.title().should('eq','registration')  // invalid assertion

})


})

// npx cypress run --spec cypress\e2e\ScreenshotANDvideo.cy.js