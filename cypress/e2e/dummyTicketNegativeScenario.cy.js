
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

describe ('Ticket Booking', function(){

  beforeEach (() =>{
      cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
      cy.contains('INR')
      cy.wait(3000)
  })
  
it('Place order with valid details (positive scenario)',function(){
  cy.contains('Dummy ticket for Visa Application').get('#product_549').click()

  // Mandatory fields
  cy.contains('First / Given name').get('#travname').should('have.attr', 'placeholder', 'first and middle name as on passport').type('Aswin')
  cy.contains('Date of birth').click()
  cy.get('#dob').should('be.visible').should('exist').click()
  cy.wait(2000)
  cy.get('.ui-datepicker-year').select("1998")
  cy.get(':nth-child(2) > :nth-child(4) > .ui-state-default').click()
  cy.get('#sex_field').get('#sex_1').click()
  cy.contains('Trip type').get('#traveltype_1').click()
  cy.contains('From city / Origin').get('#fromcity').type('coimbatore')
  cy.contains('To city. /Destination ').get('#tocity').type('pollachi')

  cy.contains('Departure date ').get('#departon').click({force: true})
  cy.get("select[aria-label='Select month']").select('Feb')
  cy.get('tbody tr:nth-child(1) td:nth-child(4) a:nth-child(1)').contains('1').click({force: true})
  cy.wait(2000)

  cy.contains('Billing Name / Company ').get('#billname').type('Aswin')
  cy.contains('Phone').get('#billing_phone').type('1234567893')
  cy.contains('Email address').get('#billing_email').type('aswin@gmail.com')
  cy.contains('Country').get('#select2-billing_country-container').click().get("#select2-billing_country-results>li").contains('India').click()
  cy.contains('Street address').get('#billing_address_1').type('coimbatore,tamilnadu')
  cy.contains('Town / City').get('#billing_city').type('coimbatore')
  cy.contains('State').get('#billing_state').click().type('Tamil Nadu')
  cy.contains('Postcode / ZIP').get('#billing_postcode').type('641010')

  cy.contains('Place order').get('#place_order').click({force: true})
  cy.wait(4000)
  cy.url().should('contain','https://api.payu.in/public')

})



it('Place order with Invalid details Firstname empty field (negative scenario)',function(){
  cy.contains('Dummy ticket for Visa Application').get('#product_549').click()

  cy.contains('Date of birth').click()
  cy.get('#dob').should('be.visible').should('exist').click()
  cy.wait(2000)
  cy.get('.ui-datepicker-year').select("1998")
  cy.get(':nth-child(2) > :nth-child(4) > .ui-state-default').click()
  cy.get('#sex_field').get('#sex_1').click()
  cy.contains('Trip type').get('#traveltype_1').click()
  cy.contains('From city / Origin').get('#fromcity').type('coimbatore')
  cy.contains('To city. /Destination ').get('#tocity').type('pollachi')

  cy.contains('Departure date ').get('#departon').click({force: true})
  cy.get("select[aria-label='Select month']").select('Feb')
  cy.get('tbody tr:nth-child(1) td:nth-child(4) a:nth-child(1)').contains('1').click({force: true})
  cy.wait(2000)

  cy.contains('Billing Name / Company ').get('#billname').type('Aswin')
  cy.contains('Phone').get('#billing_phone').type('1234567893')
  cy.contains('Email address').get('#billing_email').type('aswin@gmail.com')
  cy.contains('Country').get('#select2-billing_country-container').click().get("#select2-billing_country-results>li").contains('India').click()
  cy.contains('Street address').get('#billing_address_1').type('coimbatore,tamilnadu')
  cy.contains('Town / City').get('#billing_city').type('coimbatore')
  cy.contains('State').get('#billing_state').click().type('Tamil Nadu')
  cy.contains('Postcode / ZIP').get('#billing_postcode').type('641010')

  cy.contains('Place order').get('#place_order').click({force: true})
  cy.wait(4000)
  cy.get("li[data-id='travname']").should('have.text','\n\t\t\tFirst / Given name is a required field.\t\t')
  

})

it('Place order with Invalid details DOB empty field (negative scenario)',function(){
  cy.contains('Dummy ticket for Visa Application').get('#product_549').click()

  cy.contains('First / Given name').get('#travname').should('have.attr', 'placeholder', 'first and middle name as on passport').type('Aswin')
  cy.get('#sex_field').get('#sex_1').click()
  cy.contains('Trip type').get('#traveltype_1').click()
  cy.contains('From city / Origin').get('#fromcity').type('coimbatore')
  cy.contains('To city. /Destination ').get('#tocity').type('pollachi')

  cy.contains('Departure date ').get('#departon').click({force: true})
  cy.get("select[aria-label='Select month']").select('Feb')
  cy.get('tbody tr:nth-child(1) td:nth-child(4) a:nth-child(1)').contains('1').click({force: true})
  cy.wait(2000)

  cy.contains('Billing Name / Company ').get('#billname').type('Aswin')
  cy.contains('Phone').get('#billing_phone').type('1234567893')
  cy.contains('Email address').get('#billing_email').type('aswin@gmail.com')
  cy.contains('Country').get('#select2-billing_country-container').click().get("#select2-billing_country-results>li").contains('India').click()
  cy.contains('Street address').get('#billing_address_1').type('coimbatore,tamilnadu')
  cy.contains('Town / City').get('#billing_city').type('coimbatore')
  cy.contains('State').get('#billing_state').click().type('Tamil Nadu')
  cy.contains('Postcode / ZIP').get('#billing_postcode').type('641010')

  cy.contains('Place order').get('#place_order').click({force: true})
  cy.wait(4000)
  cy.get("li[data-id='dob']").should('have.text','\n\t\t\tDate of birth is a required field.\t\t')

})

it('Place order with Invalid details From and TO destination empty field (negative scenario)',function(){
  cy.contains('Dummy ticket for Visa Application').get('#product_549').click()

  cy.contains('First / Given name').get('#travname').should('have.attr', 'placeholder', 'first and middle name as on passport').type('Aswin')
  cy.contains('Date of birth').click()
  cy.get('#dob').should('be.visible').should('exist').click()
  cy.wait(2000)
  cy.get('.ui-datepicker-year').select("1998")
  cy.get(':nth-child(2) > :nth-child(4) > .ui-state-default').click()
  cy.get('#sex_field').get('#sex_1').click()
  cy.contains('Trip type').get('#traveltype_1').click()

  cy.contains('Departure date ').get('#departon').click({force: true})
  cy.get("select[aria-label='Select month']").select('Feb')
  cy.get('tbody tr:nth-child(1) td:nth-child(4) a:nth-child(1)').contains('1').click({force: true})
  cy.wait(2000)

  cy.contains('Billing Name / Company ').get('#billname').type('Aswin')
  cy.contains('Phone').get('#billing_phone').type('1234567893')
  cy.contains('Email address').get('#billing_email').type('aswin@gmail.com')
  cy.contains('Country').get('#select2-billing_country-container').click().get("#select2-billing_country-results>li").contains('India').click()
  cy.contains('Street address').get('#billing_address_1').type('coimbatore,tamilnadu')
  cy.contains('Town / City').get('#billing_city').type('coimbatore')
  cy.contains('State').get('#billing_state').click().type('Tamil Nadu')
  cy.contains('Postcode / ZIP').get('#billing_postcode').type('641010')

  cy.contains('Place order').get('#place_order').click({force: true})
  cy.wait(4000)
  cy.get("li[data-id='fromcity']").should('have.text','\n\t\t\tFrom city / Origin is a required field.\t\t')
  cy.get("li[data-id='tocity']").should('have.text','\n\t\t\tTo city. /Destination is a required field.\t\t')

})

it('Place order with Invalid details From and TO destination empty field (negative scenario)',function(){
  cy.contains('Dummy ticket for Visa Application').get('#product_549').click()

// check the return date field visibilty according to selecting trip tip 

cy.contains('Trip type').get('#traveltype_1').click() // for without return type trip
cy.contains('Return date').should('not.be.visible')

cy.contains('Trip type').get('#traveltype_2').click() // for return type trip
cy.contains('Return date').should('be.visible')

// check the visibilty for additional passenger field applicable for additonal
cy.contains(' Add more passengers: ').get("#addmorepax").click()
cy.contains("Number of additional passengers:").should('be.visible')

cy.contains(' Add more passengers: ').get("#addmorepax").click()
cy.contains("Number of additional passengers:").should('not.be.visible')






})


})