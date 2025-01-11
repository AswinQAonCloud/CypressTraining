let inputDetails;

describe('Data Driven Testing Using Excel File', () => {


  before(() => {
      cy.task('readXlsx', { file: 'C:/Users/Administrator/QAonCloudCypressAutomoationTraining/cypress/fixtures/excelData.xlsx', sheet: "Sheet1" }).then((input) => {
      inputDetails = input.length;
      cy.writeFile("C:/Users/Administrator/QAonCloudCypressAutomoationTraining/cypress/fixtures/xlsxData.json", { input })
    })
  })

  beforeEach(() => {
    cy.visit("https://angular-7-registration-login-example.stackblitz.io/login?returnUrl=%2F");
    cy.wait(10000)
  })

  
  it('Data Driven: Register User by valid details (positive scenario)', () => {

    cy.get('button').click();
    cy.fixture('xlsxData').then((data) => {
      for (let i = 0; i < inputDetails; i++) {
        cy.get('.btn-link').click();
        cy.url().should('include', '/register').then(() => {
          cy.get('body > app > div.jumbotron > div > div > div > ng-component > form > div:nth-child(1) > input').clear().type(data.input[i].firstname);
          cy.get('body > app > div.jumbotron > div > div > div > ng-component > form > div:nth-child(2) > input').clear().type(data.input[i].lastname);
          cy.get('body > app > div.jumbotron > div > div > div > ng-component > form > div:nth-child(3) > input').clear().type(data.input[i].username);
          cy.get('body > app > div.jumbotron > div > div > div > ng-component > form > div:nth-child(4) > input').clear().type(data.input[i].password);
          cy.get('.btn-primary').click();
          cy.get('alert').should('have.text', data.input[i].message);
        })
      }
    })
  })

  it('Data Driven: Register User by invalid details (negative scenario)', () => {

    cy.get('button').click();
    cy.get('.btn-link').click();
    cy.fixture('xlsxData').then((data) => {
      for (let i = 0; i < inputDetails; i++) {
        cy.url().should('include', '/register').then(() => {
          cy.wait(4000)
          cy.get('body > app > div.jumbotron > div > div > div > ng-component > form > div:nth-child(1) > input').clear().type(data.input[i].firstname);
          cy.get('body > app > div.jumbotron > div > div > div > ng-component > form > div:nth-child(2) > input').clear().type(data.input[i].lastname);
          cy.get('body > app > div.jumbotron > div > div > div > ng-component > form > div:nth-child(3) > input').clear().type(data.input[i].username);
          cy.get('body > app > div.jumbotron > div > div > div > ng-component > form > div:nth-child(4) > input').clear().type(data.input[i].invalidpassword);
          cy.get('.btn-primary').click();
          cy.get('.invalid-feedback > div').should('have.text', data.input[i].errormessage);
          cy.reload()
        })
      }
    })
  })
it('Data Driven: valid login User details (positive scenario)', () => {
    cy.reload()
    cy.wait(4000)
    cy.get('button').click();
    cy.get('.btn-link').click();
    cy.fixture('xlsxData').then((data) => {
      for (let i = 0; i < inputDetails; i++) {
        cy.url().should('include', '/register').then(() => {
          cy.wait(4000)
          cy.get('body > app > div.jumbotron > div > div > div > ng-component > form > div:nth-child(1) > input').clear().type(data.input[i].firstname);
          cy.get('body > app > div.jumbotron > div > div > div > ng-component > form > div:nth-child(2) > input').clear().type(data.input[i].lastname);
          cy.get('body > app > div.jumbotron > div > div > div > ng-component > form > div:nth-child(3) > input').clear().type(data.input[i].username);
          cy.get('body > app > div.jumbotron > div > div > div > ng-component > form > div:nth-child(4) > input').clear().type(data.input[i].password);
          cy.get('.btn-primary').click();
          cy.get('alert').should('have.text', data.input[i].message);
          cy.get("input[type='text']").clear().type(data.input[i].username);
          cy.get("input[type='password']").clear().type(data.input[i].password);
          cy.get('.btn-primary').click();
          cy.get("div[class='col-sm-6 offset-sm-3'] ng-component h1").should('have.text', data.input[i].loginmessage);
          cy.get('.navbar-nav > :nth-child(2)').click();
          cy.get(".btn.btn-link").click();
        })
      }
    })
  })


  it('Data Driven: Invalid login User details (negative scenario)', () => {

    cy.get('button').click();
    cy.get('.btn-link').click();
    cy.fixture('xlsxData').then((data) => {
      for (let i = 0; i < inputDetails; i++) {
        cy.url().should('include', '/register').then(() => {
          cy.wait(4000)
          cy.get('body > app > div.jumbotron > div > div > div > ng-component > form > div:nth-child(1) > input').clear().type(data.input[i].firstname);
          cy.get('body > app > div.jumbotron > div > div > div > ng-component > form > div:nth-child(2) > input').clear().type(data.input[i].lastname);
          cy.get('body > app > div.jumbotron > div > div > div > ng-component > form > div:nth-child(3) > input').clear().type(data.input[i].username);
          cy.get('body > app > div.jumbotron > div > div > div > ng-component > form > div:nth-child(4) > input').clear().type(data.input[i].password);
          cy.get('.btn-primary').click();
          cy.get('alert').should('have.text', data.input[i].message);
          cy.get("input[type='text']").clear().type(data.input[i].invalidusername);
          cy.get("input[type='password']").clear().type(data.input[i].invalidpassword);
          cy.get('.btn-primary').click();
          cy.wait(3000)
          cy.get('.alert.alert-danger').should('have.text', data.input[i].loginerrormessge);
          cy.get(".btn.btn-link").click();
        })
      }
    })
  })


})
