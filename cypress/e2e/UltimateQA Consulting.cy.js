/// <reference types="cypress"/>

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    });
    
    describe('UltimateQA_Consulting_27102022',function()
    { 

        it('Consulting(1) page content',function(){
            cy.visit("https://ultimateqa.com/consulting/")
            cy.title().should('eq','Consulting Services - Ultimate QA')
            cy.contains("Framework Assessments & Testing Consulting").should('be.visible')
            // menu links
            cy.get('#menu-home-page-menu>li').should('have.length','7').and('be.visible')
            cy.contains('Courses').click({force:true})
            cy.url().should('eq','https://courses.ultimateqa.com/collections')
            cy.go(-1)
            cy.contains('Selenium Java').click({force:true})
            cy.url().should('eq','https://ultimateqa.com/selenium-java-2')
            cy.go(-1)
            cy.contains("Selenium C#").click({force:true})
            cy.url().should('eq','https://courses.ultimateqa.com/courses/selenium-with-c')
            cy.go(-1)
            cy.contains("Selenium Resources").click({force:true})
            cy.url().should('eq','https://ultimateqa.com/best-selenium-webdriver-resources/')
            cy.go(-1)
            cy.contains("Automation Exercises").click({force:true})
            cy.url().should('eq','https://ultimateqa.com/automation/')
            cy.go(-1)
            cy.contains("Blog").click({force:true})
            cy.url().should('eq','https://ultimateqa.com/blog/')
            cy.go(-1)
            // framework sections
            cy.get('.et_pb_row.et_pb_row_0>div').should('have.length','3').and('be.visible') 
            // casestudies section
            cy.get('.et_pb_row.et_pb_row_2.et_pb_equal_columns.et_pb_gutters2>div').should('have.length','3').and('be.visible')
            // footer links
            cy.get('#menu-footer-menu>li').should('have.length','8').and('be.visible')
            cy.contains('About')
            cy.contains('Affiliate Program')
            cy.contains("Consulting Service")
            cy.contains("Terms and conditions")
            cy.contains("Privacy policy")
            cy.contains("YouTube")
            cy.contains("Facebook")
            cy.contains("Contact Us")
           // social medis links
           cy.get('.swp_social_panel.swp_horizontal_panel.swp_flat_fresh.swp_default_full_color.swp_other_full_color.swp_individual_full_color.scale-100.scale-full_width.nc_floater>div')
           .should('have.length','3').and('be.visible')
          cy.get("div[class='swp_social_panel swp_horizontal_panel swp_flat_fresh swp_default_full_color swp_other_full_color swp_individual_full_color scale-100 scale-full_width nc_floater'] div[class='nc_tweetContainer swp_share_button swp_facebook']>a")
          .should("have.attr", "href", "https://www.facebook.com/share.php?u=https%3A%2F%2Fultimateqa.com%2Fconsulting%2F%3Futm_source%3Dfacebook%26utm_medium%3DSocial%26utm_campaign%3DSocialWarfare")
          cy.get("div[class='swp_social_panel swp_horizontal_panel swp_flat_fresh swp_default_full_color swp_other_full_color swp_individual_full_color scale-100 scale-full_width nc_floater'] div[class='nc_tweetContainer swp_share_button swp_twitter']>a")
          .should("have.attr", "href", "https://twitter.com/intent/tweet?text=Consulting+Services&url=https%3A%2F%2Fultimateqa.com%2Fconsulting%2F%3Futm_source%3Dtwitter%26utm_medium%3DSocial%26utm_campaign%3DSocialWarfare&via=Nikolay_a00")
          cy.get("div[class='swp_social_panel swp_horizontal_panel swp_flat_fresh swp_default_full_color swp_other_full_color swp_individual_full_color scale-100 scale-full_width nc_floater'] div[class='nc_tweetContainer swp_share_button swp_linkedin']>a")   
          .should("have.attr", "href", "https://www.linkedin.com/cws/share?url=https%3A%2F%2Fultimateqa.com%2Fconsulting%2F%3Futm_source%3Dlinkedin%26utm_medium%3DSocial%26utm_campaign%3DSocialWarfare")
         // new window handling for social link
          cy.visit("https://ultimateqa.com/consulting/")
          cy.window().then((win) => {
            cy.stub(win, 'open', url => {
                win.location.href = 'https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fshare.php%3Fu%3Dhttps%253A%252F%252Fultimateqa.com%252Fconsulting%252F%253Futm_source%253Dfacebook%2526utm_medium%253DSocial%2526utm_campaign%253DSocialWarfare&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=en_GB';
            }).as("popup")
        })
        cy.get("div[class='swp_social_panel swp_horizontal_panel swp_flat_fresh swp_default_full_color swp_other_full_color swp_individual_full_color scale-100 scale-full_width nc_floater'] div[class='nc_tweetContainer swp_share_button swp_facebook'] a[class='nc_tweet swp_share_link']").click()
        cy.get('@popup') .should("be.called")
        })

        it('Consulting(2) View the case study result', function ()
       {  
           cy.visit("https://ultimateqa.com/consulting/")
           //First link selection(related to DevOps)
           cy.contains('Case Study Results').invoke('removeAttr','target').click({force:true})
           //AI tab selection
           cy.contains('AI').click({force:true})
           //Selecting a topic
           cy.contains('Testing Automation has Become a Necessity – Techstrong TV').click({force:true})
           //selecting a Hyper link
           cy.contains('Performance Optimization').click({force:true})
           //selecting a particular option in the dropdown,SPONSORED COMMUNITIES
           cy.get('#mega-menu-item-131631 > [aria-haspopup="true"]').click({force:true})
           //drop down value selection
           cy.contains('IT as Code').click({force:true})
           cy.get('#mega-menu-item-129582 > div > form > input[type=text]:nth-child(3)').type("Jumpcloud") 
           cy.get('#mega-menu-item-129582 > div > form > span').click({force:true})
           cy.contains('Newest').click({force:true})
           cy.wait(7000)
           cy.contains('Oldest').click({force:true})
           cy.wait(7000)

       })
       it('Consulting(3) Contact form ', function ()
       {  
           cy.visit("https://ultimateqa.com/consulting/")
           cy.get('#et_pb_contact_name_0').type("Syril")
           cy.get('#et_pb_contact_email_0').type("syril123@gmail.com")
           cy.get('#et_pb_contact_companyname_0').type("Ernst&Young")
           cy.get('#et_pb_contact_message_0').type("I need a hands-on session of MongoDB.  Could you help?")
           cy.get('[name="et_builder_submit_button"]').click()
           cy.get('.et-pb-contact-message > p').should('contain','Thanks for contacting us')
           cy.contains('Pro Services').click()
           // privacy footer field
           cy.contains('Privacy policy').click()
           // view privacy statement for pingdom
           cy.contains('Pingdom').click()
           //accepting the cookies 
           cy.get('#onetrust-accept-btn-handler').click({force:true})
           cy.url().should('eq','https://www.solarwinds.com/legal/privacy')
       })
       
    })


    