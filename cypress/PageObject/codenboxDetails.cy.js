
class codenboxpractice{


radioButtonOption(){
  
    cy.xpath("//div[@id='radio-btn-example']//fieldset//label").each(($el, index, $list) => {
    
        // Log the text of each radio button label
        const labelText = $el.text().trim();
        cy.log(`Radio button ${index + 1}: ${labelText}`);
        cy.wrap($el).invoke('text').then(text => {
          cy.log(`Found label: ${text}`);
        });
        
        // Find and check the radio button within the label
        cy.wrap($el).find('input[type="radio"]').check().should('be.checked');
        
        // Verify other radio buttons are not selected
        cy.xpath("//div[@id='radio-btn-example']//fieldset//label//input[@type='radio']")
          .each(($input, i) => {
            if (i !== index) {
              cy.wrap($input).should('not.be.checked');
            }
          });
      });
}

checkbox(){
  cy.get("div[id='checkbox-example'] fieldset ").should('be.visible')    // visibility

  cy.get("#checkBoxOption1").check().should('be.checked')  
  cy.get("#checkBoxOption2").check().should('be.checked') 
  cy.get("#checkBoxOption3").check().should('be.checked')   

  cy.get("#checkBoxOption1").uncheck().should('not.be.checked') 
  cy.get("#checkBoxOption2").uncheck().should('not.be.checked') 
  cy.get("#checkBoxOption3").uncheck().should('not.be.checked')   
}


dynamicDropdown(){
  cy.get("div[id='select-class-example'] fieldset").should('be.visible')    // visibility

  cy.get('#autocomplete').type('Uni')
  cy.get('.ui-menu-item div').each(($el, index, $list) => {
    const optionText = $el.text().trim()
    if (optionText === 'United States Minor Outlying Islands') {
      $el.trigger('click')
      return false
    }
  })
  cy.get('#autocomplete').should('have.value', 'United States Minor Outlying Islands')

}

staticDropdown(){
  cy.get('#dropdown-class-example').select('Selenium')
  cy.get('#dropdown-class-example').should('have.value', 'option1')
}

handlingNewWindow(){

  cy.window().then((win) => {
    cy.stub(win, 'open', url => {
        win.location.href = 'http://www.codenbox.com/';
    }).as("popup")
})
cy.get('#openwindow').click()
cy.get('@popup') .should("be.called")
cy.title().should('eq','Codenbox – IT Solution & Services')
cy.go('back')

}

handlingNewTab(){
  cy.get('#opentab').invoke('removeAttr', 'target').click()
    cy.title().should('eq','Codenbox AutomationLab - YouTube')
    cy.go('back')
}

handlingWebTable(){
  cy.get('tbody tr:nth-child(3)').each(($e,index,$list) => {
    const text=$e.text()
    if(text.includes("Sariful Islam"))
    {
        cy.get('tbody tr:nth-child(3)>td:nth-child(3)').eq(index).then(function(cname)
        {
          const customername= cname.text()
          expect(customername).to.equal("10")
        })
    }
})
}

alert(){

// alert
cy.get("#name").type('test')
cy.get('#alertbtn').click()
cy.on('window:alert', (str) => {
  expect(str).to.contains('Hello , share this practice page who love to learn automation')
})

// confirm alert
cy.get("#name").type('test')
cy.get('#alertbtn').click()
cy.on('window:confirm', (str) => {
  expect(str).to.contains('Hello , Are you sure you want to confirm?')
  cy.on('window:confirm', () => false)
})
}

mouseOver(){
  cy.get("#mousehover").trigger('mouseover')
  cy.contains('Top')
  cy.contains('Reload')
}


hideAndUnhide(){
  cy.get("#hide-textbox").click()
  cy.get("#displayed-text").should('not.be.visible')
  
  cy.get("#hide-textbox").click()
  cy.get("#displayed-text").invoke('attr', 'style', 'visibility: visible').should('be.visible')
}

iframe(){
  
  cy.get('iframe')
  .then(($iframe) => {
    const $body = $iframe.contents().find('body')
    cy.wrap($body)  
cy.title().should('eq','Automation Practice - CodenBox AutomationLab')
cy.xpath("//legend[contains(text(),'iFrame Example')]").contains('iFrame Example')
      
  })
}



}

export const codenBoxPractice = new codenboxpractice