Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  
  require('cypress-xpath');
  import { codenBoxPractice } from "../PageObject/codenboxDetails.cy";
  
  describe('codenbox automation', function () {
  
 
    beforeEach(() => {
      cy.visit('https://codenboxautomationlab.com/practice/');
    });
  
    it('radio button', function () {
      codenBoxPractice.radioButtonOption();
    });
  
    it('checkbox', function () {
      codenBoxPractice.checkbox();
    });
  
    it('dynamicDropdown', function () {
      codenBoxPractice.dynamicDropdown();
    });
  
    it('staticDropdown', function () {
      codenBoxPractice.staticDropdown();
    });
  
    it('handlingNewWindow', function () {
      codenBoxPractice.handlingNewWindow();
    });
  
    it('handlingNewTab', function () {
      codenBoxPractice.handlingNewTab();
    });
  
    it('handlingWebTable', function () {
      codenBoxPractice.handlingWebTable();
    });
  
    it('alert', function () {
      codenBoxPractice.alert();
    });
  
    it('mouseOver', function () {
      codenBoxPractice.mouseOver();
    });
  
    it('hideAndUnhide', function () {
      codenBoxPractice.hideAndUnhide();
    });
  
    it('iframe', function () {
      codenBoxPractice.iframe();
    });
  
  });
  