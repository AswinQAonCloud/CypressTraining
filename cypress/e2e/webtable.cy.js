 
describe('html web',function(){
    it('checking table elements',function(){
        cy.visit("https://demo.opencart.com/admin/index.php?route=common/login", {
            failOnStatusCode: false,
        })
        cy.title().should('eq','Administration')
cy.viewport(3000,2000)
        // Login to the webpage
        
        cy.get("button[type='submit']").click()
        cy.wait(2000)


        // Navigating to table module in  customer section
        cy.get(".parent[href='#collapse-5']").click()
        cy.get("#menu-customer > a").click()
        cy.get("#collapse-5 > li:nth-child(1) > a").click()

        // checking the number of rows and column in the table
        cy.get('table[class="table table-bordered table-hover"]>tbody>tr').should('have.length','10')
        cy.get('table[class="table table-bordered table-hover"]>thead>tr>td').should('have.length','6')

        //check the data present on anywhere in the table
        cy.get(".table-responsive").contains('td','leduyquan25741244@gmail.com').should('be.visible')
        cy.get(".table-responsive").contains('td','sunil1@gmail.com').should('be.visible')

        //specifed column and rows
        cy.get("tbody tr:nth-child(3) td:nth-child(3)")        // checking the values and text contains in the specific row and column
        .should('have.text','!!!@gmail.com').should('be.visible')
        cy.get(':nth-child(5) > :nth-child(4)')
        .should('have.text','Default').should('be.visible')
        cy.get('tbody > :nth-child(1) > :nth-child(5)')
        .should('have.text','11/11/2024').should('be.visible')

        // check the values is expected based on conditions   
         cy.get('#form-customer > div.table-responsive > table > tbody > tr td:nth-child(3)').each(($e,index,$list) => {
            const text=$e.text()
            if(text.includes("minhkhoi@gmail.com"))
            {
                cy.get('#form-customer > div.table-responsive > table>tbody>tr td:nth-child(3)').eq(index).then(function(cname)
                {
                  const customername= cname.text()
                  expect(customername).to.equal("minhkhoi@gmail.com")
                })
            }
        })
    
        cy.get('#form-customer > div.table-responsive > table > tbody > tr td:nth-child(5)').each(($e,index,$list) => {
            const text=$e.text()
            if(text.includes("03/11/2024"))
            {
                cy.get('#form-customer > div.table-responsive > table>tbody>tr td:nth-child(5)').eq(index).then(function(cdate)
                {
                  const customername= cdate.text()
                  expect(customername).to.equal("03/11/2024")
                })
            }
        
 
    })
})
})