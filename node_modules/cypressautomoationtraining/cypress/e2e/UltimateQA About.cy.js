
/// <reference types="cypress"/>

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    });
    
    describe('UltimateQA_About_',function()
    { 
        it('AboutPage(1) selecting Course ', function ()
       {  
           cy.visit("https://ultimateqa.com/about/")
           cy.get('[href="https://courses.ultimateqa.com/collections"]').click({force:true})  //select Courses
           cy.wait(5000)
           cy.get('body > main:nth-child(4) > div:nth-child(1) > div:nth-child(4) > ul:nth-child(1) > li:nth-child(5) > a:nth-child(1) > div:nth-child(2) > div:nth-child(1) > h3:nth-child(1)')
           .should('have.text','\n          Complete Selenium Webdriver with C# - Build A Framework\n        ')  //assertion
           cy.wait(5000)
           cy.get(':nth-child(3) > .pagination__page-number').click({force:true}) //select the link 2
           cy.wait(5000)
           cy.get('[src="https://files.cdn.thinkific.com/courses/course_card_image_000/044/5911477952858.original.jpg"]').click({force:true}) //Page object Image
           cy.wait(5000)
           cy.get("a[href='/users/sign_in']").click({force:true})  //Sign in button
           cy.url().should('contain','sign_in')  
           cy.get('input[type="email"]').type("asdfg@gmail.com")  
           cy.get('input[type="password"]').type("qwer123") 
           cy.get("button[type='submit']").click({force:true})
       })

       it('AboutPage(2) contact Us and header menus', function ()
       {  
           cy.visit("https://ultimateqa.com/about/")
           cy.get('#et_pb_contact_name_0').type("Mary")
           cy.get('#et_pb_contact_email_0').type("marygreen@gmail.com")
           cy.get('#et_pb_contact_message_0').type("Regarding the courses offered")
           cy.get('#et_pb_contact_form_0 > div.et_pb_contact > form > div > div > p > input').click({force:true})
           cy.wait(5000) //enter the captcha incorrectly
           cy.get('[name="et_builder_submit_button"]').click({force:true})
           cy.get(".et-pb-contact-message>ul>li").should('have.text','Captcha')   
           //Automation Exercises Tab
           cy.get('#menu-home-page-menu > .et_pb_menu_page_id-507 > a').click({force:true})
           cy.contains('Learn how to automate an application that evolves over time').click({force:true})
           cy.title().should('eq','Sample Application Lifecycle - Sprint 1 - Ultimate QA')
           cy.get('[name="firstname"]').type("MaryG")
           cy.get('#submitForm').click({force:true})
           cy.title().should('eq','Homepage - Ultimate QA')
           cy.get('[placeholder="Search"]').type("Cypress tool")
           cy.get('.et_pb_searchsubmit').click({force:true})
           //Blog Tab
           cy.wait(10000)
           cy.contains('Blog').click({force:true})
           cy.title().should('eq','Blog - Ultimate QA')
           cy.contains('Older Entries').click({force:true})
           cy.wait(10000)
           cy.get('#post-216783 > .entry-title > a').trigger('mouseover')  //C# AUTOMATION FRAMEWORK FOR WEB APPS [SELENIUM, APPIUM, SAUCE LABS, .NET]
           cy.wait(7000)
           cy.get('#post-216766 > .entry-title > a').click({force:true})  //TEST DATA MANAGEMENT
           cy.title().should('eq','Test Data Management')
       })
    

    it('About(3) page content',function(){

        cy.visit("https://ultimateqa.com/about/")
        cy.get(".wp-image-216051.entered.lazyloaded").should('be.visible') // web logo image  
        .should('have.attr', 'src', 'https://ultimateqa.com/wp-content/uploads/2020/11/01_Ultimate-QA_Logo_V1_rp.png')
        cy.get("div[class='et_pb_module et_pb_text et_pb_text_0 et_pb_text_align_left et_pb_bg_layout_light et_had_animation'] h1").should("have.text",'Nikolay Advolodkin')
        cy.get("img[title='nikolay advolodkin']").should('be.visible')    // image of influncer
        .should('have.attr', 'src', 'https://ultimateqa.com/wp-content/uploads/2020/09/Sauce-Con-Green-Hoody.jpg')
        cy.get("a[href='https://github.com/nadvolod']").click()   // influncer github link
        cy.url().should("eq",'https://github.com/nadvolod')
        cy.go('back')
        cy.get(".wp-image-7706.entered.lazyloaded").should('be.visible')   // Technology influncer image
        .should('have.attr', 'src', 'https://ultimateqa.com/wp-content/uploads/2018/11/Technology-Influencer.png')
        // social media new tab link
        cy.get("body > div:nth-child(9) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > article:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > ul:nth-child(1)>li")
        .should('have.length','4').and('be.visible')  // number links 
        cy.get("a[title='Follow on LinkedIn']")
        .invoke('removeAttr', 'target').click()
        cy.url().should('eq', 'https://www.linkedin.com/in/nikolayadvolodkin/')
        cy.go(-1)
        cy.get("a[title='Follow on Twitter']")
        .invoke('removeAttr', 'target').click()
        cy.url().should('eq', 'https://twitter.com/Nikolay_A00')
        cy.go(-1)
        cy.get("a[title='Follow on Youtube']").invoke('removeAttr', 'target').click()
        cy.url().should('eq', 'https://www.youtube.com/channel/UCVZXj9vKyZ6L2OakzRH2aOQ?view_as=subscriber')
    })

    it('About(4) case studies and page Footer',function(){

        cy.visit("https://ultimateqa.com/about/")
        // footer image 
        cy.get("div[class='et_pb_module et_pb_image et_pb_image_4'] span[class='et_pb_image_wrap']>img").should('be.visible') 
        .should('have.attr', 'src', "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20450%20200'%3E%3C/svg%3E")
        cy.get("div[class='et_pb_module et_pb_image et_pb_image_5'] span[class='et_pb_image_wrap']>img").should('be.visible') 
        .should('have.attr', 'src', "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20450%20200'%3E%3C/svg%3E")
        cy.get("div[class='et_pb_module et_pb_image et_pb_image_6'] span[class='et_pb_image_wrap']>img").should('be.visible') 
        .should('have.attr', 'src', "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20450%20200'%3E%3C/svg%3E")
        cy.get("div[class='et_pb_module et_pb_image et_pb_image_7'] span[class='et_pb_image_wrap']>img").should('be.visible')  
        .should('have.attr', 'src', "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20450%20200'%3E%3C/svg%3E")
       // case study section 
       cy.get("a[href='https://devops.com/4-steps-to-achieve-a-66-reduction-in-test-run-time/']").click()
       cy.url().should('eq','https://devops.com/4-steps-to-achieve-a-66-reduction-in-test-run-time/')
       cy.go(-1)
       cy.get("div[class='et_pb_text_inner'] p a span").click()
       cy.url().should('eq','https://saucelabs.com/blog/how-to-optimize-a-test-and-make-it-560-percent-faster')
       cy.go(-1)
       cy.get("body > div:nth-child(9) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > article:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)>h1")
       .should('have.text','Case Studies')
    })

})