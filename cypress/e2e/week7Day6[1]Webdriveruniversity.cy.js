describe('Day 6 - WebdriverUniversity',function(){

    it('Contact Us',function(){
       
        cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html');
        cy.clearCookies()
        cy.get("h2[name='contactme']").should('be.visible').and('contain.text','CONTACT US');
        cy.get("input[placeholder='First Name']").should('be.visible').should('not.have.value')
        cy.get("input[placeholder='Last Name']").should('be.visible').should('not.have.value')
        cy.get("input[placeholder='Email Address']").should('be.visible').should('not.have.value')
        cy.get("textarea[placeholder='Comments']").should('be.visible').should('not.have.value')
        cy.get("input[value='RESET']").should('exist');
        cy.get("input[value='SUBMIT']").should('exist').click({force:true});
        
        cy.get('body').should('contain.text','Error: all fields are required');
        cy.get('body').should('contain.text','Error: Invalid email address');

        cy.go('back')

        cy.get("input[placeholder='First Name']").should('be.visible').type('test').should('have.value','test');
        cy.get("input[placeholder='Last Name']").should('be.visible').type('qaoncloud').should('have.value','qaoncloud');;
        cy.get("input[placeholder='Email Address']").should('be.visible').type('test@qaoncloud.com').should('have.value','test@qaoncloud.com');;
        cy.get("textarea[placeholder='Comments']").should('be.visible').type('testing').should('have.value','testing');;
        cy.get("input[value='RESET']").should('exist');
        cy.get("input[value='SUBMIT']").should('exist').click({force:true});
        cy.wait(2000);
        cy.url().should('eq','http://webdriveruniversity.com/Contact-Us/contact-form-thank-you.html')
        cy.get('h1').should('contain.text','Thank You for your Message!');
     
        cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html');
        cy.wait(2000);
        cy.get('#nav-title').should('be.visible').and('contain.text','WebdriverUniversity.com (New Approach To Learning)')
        .click();
        cy.get('#udemy-promo-thumbnail').should('be.visible')
    
        cy.get('#contact-us > .thumbnail').should('be.visible')
        cy.get('#login-portal > .thumbnail').should('be.visible')
        cy.get('#button-clicks > .thumbnail').should('be.visible')
        cy.get('#to-do-list > .thumbnail').should('be.visible')
        cy.get('#to-do-list > .thumbnail').should('be.visible')
        cy.get(':nth-child(5) > #page-object-model > .thumbnail').should('be.visible')
        cy.get(':nth-child(6) > #page-object-model > .thumbnail').should('be.visible')
        cy.get('#dropdown-checkboxes-radiobuttons > .thumbnail').should('be.visible')
        cy.get('#ajax-loader > .thumbnail').should('be.visible')
        cy.get('#actions > .thumbnail').should('be.visible')
        cy.get('#scrolling-around > .thumbnail').should('be.visible')
        cy.get('#popup-alerts > .thumbnail').should('be.visible')
        cy.get('#iframe > .thumbnail')
        cy.get('#hidden-elements > .thumbnail').should('be.visible')
        cy.get('#data-table > .thumbnail').should('be.visible')
        cy.get('#autocomplete-textfield > .thumbnail').should('be.visible')
        cy.get('#file-upload > .thumbnail').should('be.visible')
        cy.get('#datepicker > .thumbnail').should('be.visible')
    })
    
    it('Login-Portal', function () {
        cy.visit('http://webdriveruniversity.com/Login-Portal/index.html?');
        cy.url().should('include', 'Login-Portal');
        cy.get('.bg-bubbles').should('be.visible');
        cy.get('#text').should('be.visible').type('test');
        cy.get('#password').should('be.visible').type('test@12345');
        cy.wait(1000);
        const alertStub = cy.stub();
        cy.on('window:alert', alertStub);
    
        cy.get('#login-button').click({ force: true }).then(() => {
            expect(alertStub).to.have.been.calledWith('validation failed'); 
            });
        });
    });
    