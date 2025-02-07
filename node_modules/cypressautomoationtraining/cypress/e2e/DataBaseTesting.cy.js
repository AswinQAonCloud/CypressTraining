Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  });
 
/// <reference types="cypress" />



describe('Example to Demonstrate SQL Database Testing in Cypress', () => {

    it('Create a Table', function () {
        cy.task('queryDb', "CREATE TABLE Persons (PersonID int, FirstName varchar(255), Address varchar(255), City varchar(255))")
    })

    it('Input Entries into the table', function () {
        cy.task('queryDb', `INSERT INTO Persons (PersonID, FirstName, Address, City) VALUES
        (001, "Messi", "House No. 01", "Argentina"),
        (002, "Ronaldo", "House No. 02", "portugal"),
        (003, "Neymar", "House No. 03", "Lapland"),
        (004, "Zalatan", "House No. 04", "Vantaa");`).then((result) => {
                expect(result.affectedRows).to.equal(4)
            })
    })

    it('Update an Entry into the table and verify', function () {
        cy.task('queryDb', `UPDATE Persons SET FirstName = "Romas" WHERE City="Vantaa"`).then((result) => {
            expect(result.changedRows).to.equal(1)
        })
        cy.task('queryDb', `SELECT FirstName FROM Persons WHERE City="Vantaa"`).then((result) => {
            expect(result[0].FirstName).to.equal('Romas')
        })
    })

    it('Verify that there is only one row where the city is portugal', function () {
        cy.task('queryDb', `SELECT COUNT(*) as "rowCount" FROM Persons WHERE City="portugal"`).then((result) => {

            expect(result[0].rowCount).to.equal(1)
        })
    })

    it('Delete a Table and Verify', function () {
        cy.task('queryDb', `DROP TABLE Persons`).then((result) => {
            expect(result.message).to.equal("")
        })
    })
})