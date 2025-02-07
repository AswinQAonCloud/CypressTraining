/// <reference types="cypress"/>

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    });
    
    describe('UltimateQA_Collections',function()
    { 

        it('Collection(1) page content',function(){
         cy.visit("https://courses.ultimateqa.com/collections")
         cy.title().should('eq','All Products - Ultimate QA')
         // header
         cy.get(".header__logo.header__logo___2909e>a>img").should('be.visible')
         .should('have.attr','src','https://import.cdn.thinkific.com/3880/atEqmld7THac8c0DZQUz_horizontal_on_transparent_by_logaster.png')
         cy.get(".header__logo.header__logo___2909e>a").should('be.visible')
         .should('have.attr','href','/collections')
         cy.contains('Sign In').should('have.attr','href','/users/sign_in')
         // heading
         cy.get(".collections__heading").contains('Products')
         // search bar
         cy.get(".form__search>label").contains('Search')
         // Products 
         cy.get(".products__list>li").should("have.length",'6')
         cy.contains("Coding and testing an authentication API [NodeJs + Cypress]")
         cy.contains("Complete Selenium WebDriver with Java Bootcamp")
         cy.contains("Modern React and NodeJS Development (hands-on projects)")
         cy.contains("TestProject Java SDK Tutorial")
         cy.contains("Complete Selenium Webdriver with C# - Build A Framework")
         cy.contains("C# For QA Automation Engineers with Selenium Webdriver")
        // pagination
        cy.get(".pagination__pages>li").should("have.length",'5') // pagination button 
        cy.get('body > main:nth-child(4) > div:nth-child(1) > div:nth-child(4) > nav:nth-child(2) > ul:nth-child(1) > li:nth-child(3) > a:nth-child(1)')
        .should("be.visible").should("have.attr","href","/collections?page=2") // page 2
        cy.get("body > main:nth-child(4) > div:nth-child(1) > div:nth-child(4) > nav:nth-child(2) > ul:nth-child(1) > li:nth-child(4) > a:nth-child(1)")
        .should("be.visible").should("have.attr","href","/collections?page=3") // page 3
       // page 2 courses
       cy.get('body > main:nth-child(4) > div:nth-child(1) > div:nth-child(4) > nav:nth-child(2) > ul:nth-child(1) > li:nth-child(3) > a:nth-child(1)').click()
       cy.url().should('eq','https://courses.ultimateqa.com/collections?page=2')
       cy.get(".products__list>li").should("have.length",'6')
       cy.contains("What are Implicit and Explicit Waits")
       cy.contains("Complete Applitools Course")
       cy.contains("Selenium WebDriver Basics for Java")
       cy.contains("Sauce Labs Advanced Course")
       cy.contains("Page Objects in Test Automation")
       cy.contains("Selenium WebDriver - Working with Elements")
       // page 3 courses
       cy.get("nav[class='pagination'] li:nth-child(4) a:nth-child(1)").click()
       cy.url().should('eq','https://courses.ultimateqa.com/collections?page=3')
       cy.get(".products__list>li").should("have.length",'2')
       cy.contains("Introduction to fast test execution in Sauce Labs and Browser Stack")
       cy.contains("Complete Selenium WebDriver Bundle")
       // footer
       cy.get(".footer__site-details>div").should('be.visible')
       cy.contains("© Copyright Ultimate QA 2022")
       cy.contains("Teach online with Thinkific")
       cy.get("a[href='//www.thinkific.com/?utm_source=qa-academy&utm_medium=powered-by&utm_campaign=Referral']")
       .should("have.attr","href","//www.thinkific.com/?utm_source=qa-academy&utm_medium=powered-by&utm_campaign=Referral")
        })

        it('Collection(2) search option', function ()
       {  
        cy.visit("https://courses.ultimateqa.com/collections")
        cy.title().should('eq','All Products - Ultimate QA')
        // invalid search
        cy.get("input[placeholder='Search']").should("be.visible").type('123{enter}')
        cy.get(".products__list-no-results").should('have.text','\n    No results were found\n  ')
        // valid search
        cy.get("input[placeholder='Search']").clear().should("be.visible").type('cypress{enter}')
        cy.get(".products__list>li").should("have.length",'2')   // 2 courses from search result
         cy.contains("Coding and testing an authentication API [NodeJs + Cypress]")
         cy.contains("Modern React and NodeJS Development (hands-on projects)")
       })

       it('Collection(3) pagination verfication testing', ()=>{

        cy.visit("https://courses.ultimateqa.com/collections")
        cy.url().should('include','ultimateqa')
        cy.get("#main-content").should('be.visible')
        cy.get("body > header > div > div > section.header__logo.header__logo___2909e > a > img")
        .should('be.visible')
        cy.scrollTo('0','2000')
        // page 2
        cy.get("body > main:nth-child(4) > div:nth-child(1) > div:nth-child(4) > nav:nth-child(2) > ul:nth-child(1) > li:nth-child(3) > a:nth-child(1)").click()
        cy.url().should('include','page=2')
        cy.get("#main-content").should('be.visible')
        // page 3
        cy.get("body > main:nth-child(4) > div:nth-child(1) > div:nth-child(4) > nav:nth-child(2) > ul:nth-child(1) > li:nth-child(4) > a:nth-child(1)").should('be.visible').click()
        cy.url().should('include','page=3')
        cy.go('back')
        cy.get("#main-content").should('be.visible')   
        //verify backward and forward button 
        cy.wait(2000)
        cy.get("nav[class='pagination'] li:nth-child(1)").should('be.visible').click()
        cy.url().should('include','page=1')
        cy.get("a[aria-label='Next page']").should('be.visible').click()
        cy.url().should('include','page=2')
        
        })

       it('Collection(4) Sign in ', function ()
       {  
        cy.visit("https://courses.ultimateqa.com/collections")
        cy.title().should('eq','All Products - Ultimate QA')
        // blank Field validation
        cy.get("a[href='/users/sign_in']").click({force:true})  
        cy.url().should('contain','sign_in')  
        cy.get('input[type=email]').click()
            cy.get('input[type=password]').click() 
            cy.get('input[type=email]').click()
            cy.get(".sign-in__form")
            cy.contains("Please enter a valid email address")  // validation message for email field
            cy.contains("This field cannot be blank")          // validation message for password
            cy.reload()
            // invalid credentials
            cy.get('input[type=email]').type('jazon')
            cy.get('input[type=password]').type('agsfghasvh')
            cy.get('.form__button-group > .button').click()
            cy.wait(10000)
            cy.contains('Invalid email or password.').should('be.visible') 
            cy.reload()
            cy.get("a[href='/users/sign_in']").click({force:true}) 
           // valid credentials
           cy.get('input[type=email]').type('aswinkumar.cengg1999@gmail.com')
           cy.get('input[type=password]').type('123456789')
           cy.get('.form__button-group > .button').click() // signin sucessfully
           cy.wait(10000)
           cy.get("button[aria-label='Toggle menu']").should("have.text","\n          Aswin K\n          \n          \n        ")
           // Already enrolled course verification 
           cy.get("section[class='student-dashboard__content student-dashboard__content___cbc83'] div[class='student-dashboard__container']")
            cy.contains('My courses')
            cy.contains("Coding and testing an authentication API [NodeJs + Cypress]").should('be.visible')
       })
       
       it('Collection(5) Enrolling free course ', function (){
        cy.visit("https://courses.ultimateqa.com/collections")
        cy.get("a[href='/users/sign_in']").click({force:true}) 
        cy.get('input[type=email]').type('aswinkumar.cengg1999@gmail.com')
        cy.get('input[type=password]').type('123456789')
        cy.get('.form__button-group > .button').click() 
        cy.wait(10000)
        cy.get("div[class='form__group'] a").click()
        cy.get("body > main:nth-child(4) > div:nth-child(1) > div:nth-child(4) > ul:nth-child(1) > li:nth-child(4) > a:nth-child(1) > div:nth-child(2) > div:nth-child(1) > h3:nth-child(1)")
        cy.contains("Modern React and NodeJS Development (hands-on projects)").click()
        cy.url().should('eq','https://courses.ultimateqa.com/courses/react-and-nodejs')
        cy.title().should('eq','Modern React and NodeJS Development (hands-on projects)')
        cy.get(".course-curriculum-card").should('be.visible')
        cy.get(".course-curriculum__chapter-list.section__body>li").should('have.length','6').should('be.visible') // tutorial content list
        cy.get(".button.button-primary").click( )  // added  course
        cy.get('.message-text').should('be.visible').should('exist') // assert  message
        .should('have.text','You are already enrolled in Modern React and NodeJS Development (hands-on projects)')
        cy.get('.message-text').click() 
        cy.go('back')
        cy.get(".header__nav-item.header__nav-item--default").click()  // enrollment section
        cy.get("section[class='student-dashboard__content student-dashboard__content___cbc83'] div[class='student-dashboard__container']")
        cy.contains('My courses')
        cy.contains("Modern React and NodeJS Development (hands-on projects)").should('be.visible')
    })

    })


    