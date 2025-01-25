

import 'cypress-iframe';


describe('handling frames',()=>{


    it('Method-1',()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe')
        //cy.get('#mce_0_ifr').type('Hi')//this willl not run bec its inside iframe element
        const iframe =cy.get('#mce_0_ifr')
          .its('0.contentDocument.body')
          .should('be.visible')
          .then(cy.wrap)
        iframe.clear().type('Handling Iframe {ctrl+a}')
        cy.get('#content > div > div > div.tox-editor-container > div.tox-editor-header > div.tox-toolbar-overlord > div > div:nth-child(3) > button:nth-child(1)').click()
    })


    it('Method-2 using custom command',()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.getIframe('#mce_0_ifr').clear().type('Handling Iframe {ctrl+a}')
        cy.get('#content > div > div > div.tox-editor-container > div.tox-editor-header > div.tox-toolbar-overlord > div > div:nth-child(3) > button:nth-child(1)').click()
    })


    it('Method 3-iframe using plugin',function(){
 
        cy.visit("http://the-internet.herokuapp.com/iframe")
        cy.frameLoaded('#mce_0_ifr') // Load The Frame
        cy.iframe('#mce_0_ifr').clear()
        cy.iframe('#mce_0_ifr').type("Handling Iframe,{ctrl+a}")
        cy.iframe('#mce_0_ifr').contains("Handling Iframe").should('be.visible')
        cy.get("#content > div > div > div.tox-editor-container > div.tox-editor-header > div.tox-toolbar-overlord > div > div:nth-child(3) > button:nth-child(1)")
        .click();
    })


    it('iframe- trigger click method',function(){
        cy.visit('https://www.w3schools.com/js/tryit.asp?filename=tryjs_events_ondblclick')
        cy.title().should('eq','W3Schools Tryit Editor')
        cy.url().should('include','events')
        cy.frameLoaded("#iframeResult")
        cy.iframe('#iframeResult').contains('Doubleclick this paragraph to trigger a function.').trigger('dblclick')
        cy.iframe('#iframeResult').contains("Hello World").should('be.visible')
    })
})
