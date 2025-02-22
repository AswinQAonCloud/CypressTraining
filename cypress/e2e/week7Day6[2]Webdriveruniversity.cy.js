Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    });
    
    describe('Day 6 - WebdriverUniversity [Click Buttons]', () => {
      
        beforeEach(() => {
            cy.visit('http://webdriveruniversity.com/Click-Buttons/index.html');
            cy.url().should('include', 'Click-Buttons');
        });
    
        it('WebElement Click -xpath', () => {
            cy.get("div[class='row'] div:nth-child(1) div:nth-child(1) h2:nth-child(1)").should('be.visible').and('contain.text','WebElement Click');
   
            cy.xpath("//p[normalize-space()='CLICK ME!']").click();         
            cy.on('window:alert', (alertText) => {
                expect(alertText).to.equal('Congratulations! Well done for successfully using the click() method!');  
            });
            cy.get('#myModalClick > .modal-dialog > .modal-content > .modal-footer > .btn').click();      
        });
    
        it('JavaScript Click', () => {
            cy.get("div[class='row'] div:nth-child(2) div:nth-child(1) h2:nth-child(1)").should('be.visible').and('contain.text','JavaScript Click');
            cy.get('#button2').invoke('click');         
            cy.on('window:alert', (alertText) => {
                expect(alertText).to.equal("It’s that Easy!! Well I think it is.....");    
            });
            cy.get('#myModalJSClick > .modal-dialog > .modal-content > .modal-footer > .btn').click(); 
        });
    
        it('Action Move & Click', () => {
            cy.get("div[class='row'] div:nth-child(3) div:nth-child(1) h2:nth-child(1)").should('be.visible').and('contain.text','Action Move & Click');
            cy.get('#button3').trigger('mouseover').click();            
            cy.on('window:alert', (alertText) => {
                expect(alertText).to.equal("Well done! the Action Move & Click can become very useful!");  
            });
            cy.get('#myModalMoveClick > .modal-dialog > .modal-content > .modal-footer > .btn').click();  
        });
    });