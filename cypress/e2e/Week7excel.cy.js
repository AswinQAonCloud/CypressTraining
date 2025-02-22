Cypress.on('uncaught:exception', (err, runnable) => {
    return false
});

let rowsLength;
describe ('Data Driven Testing Using Excel FIle', () =>{
  before(() => {
     cy.task('readXlsx', { file: 'cypress/fixtures/register.xlsx', sheet: "Sheet1" }).then((rows) => {
        rowsLength = rows.length;
        cy.writeFile("cypress/fixtures/autodemo.json", {rows})
      })
        cy.visit("https://demo.automationtesting.in/Register.html");
      })
    it ('Data Driven: Register User', () => {
      cy.fixture('autodemo').then((data) => {
         for ( let i = 0; i < rowsLength; i++) {
          
            cy.url().should('include', '/Register').then(()=>{
            cy.get('[type="text"]').eq(0).type(data.rows[i].firstName);
            cy.wait(5000)
            cy.get('[type="text"]').eq(0).clear()
            cy.get('[type="text"]').eq(1).type(data.rows[i].lastName);
            cy.wait(5000)
            cy.get('[type="text"]').eq(1).clear()
            
          })
        }
        cy.get('#submitbtn').click({force:true})
        cy.wait(5000)
        cy.url().should('contain','.automation')
        cy.wait(1000)
      })     
     })
    })
	
	
	
	
	
	
	
	
	
	
	
	