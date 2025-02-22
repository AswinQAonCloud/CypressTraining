

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

describe('demo', function () {
    before(function () {
        cy.fixture('demoautomation').then(function (data) {
            this.data = data
        })
    })

    it('automation testing', function () {
        cy.fixture('demoautomation').then(function (data) {
            this.data = data
            cy.visitRegisterPage()
            cy.verifyTitle()
            cy.enterFirstname(this.data.firstname)
            cy.enterLastname(this.data.lastname)
            cy.enterEmail(this.data.email)
            cy.enterPhone(this.data.phone)
            cy.enterAddress(this.data.address)
            cy.selectGender()
            cy.selectHobbies()
            cy.selectSkill(this.data.skill)
            cy.selectCountryDropdown()
            cy.selectCountry(this.data.country)
            cy.selectYear(this.data.year)
            cy.selectMonth(this.data.month)
            cy.selectDay(this.data.date)
            cy.enterPassword(this.data.password)
            cy.confirmPassword(this.data.Repassword)
            cy.uploadFile()
            cy.clickSubmit()
        })
    })

    it('Invalid search in drop down', function () {
        cy.fixture('demoautomation').then(function (data) {
            this.data = data
            cy.visitRegisterPage()
            cy.verifyTitle()
            cy.selectCountryDropdown()
            cy.validateInvalidCountry(this.data.invalidcountry)
        })
    })
})
