
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
});

describe('Post Method/CreateToken', function () {

    //Post Method
    it('Create a Token', () => {
        cy.request({
            method: 'POST',
            url: 'https://restful-booker.herokuapp.com/auth',

            body: {
                "username": "admin",
                "password": "password123"
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
            cy.log(JSON.stringify(response))
        })
    })


    //Post Method
    it('Post - Create Booking', () => {
        cy.request({
            method: 'POST',
            url: 'https://restful-booker.herokuapp.com/booking',

            body: {

                "firstname": "Antony",
                "lastname": "Gates",
                "totalprice": 890,
                "depositpaid": false,
                "bookingdates": {
                    "checkin": "2022-11-01",
                    "checkout": "2022-11-05"
                },
                "additionalneeds": "Breakfast & Dinner"
            }

        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.booking.firstname).to.eq("Antony")
            expect(response.body.booking.lastname).to.eq("Gates")
            expect(response.body.booking.totalprice).equal(890)
            expect(response.body.booking.additionalneeds).equal("Breakfast & Dinner")
            expect(response.body.booking.bookingdates.checkin).equal("2022-11-01")
            expect(response.body.booking.bookingdates.checkout).equal("2022-11-05")
            expect(response.body.booking.depositpaid).equal(false)
        })
    })


    it('Get All Booking IDs', () => {
        cy.request({
            method: 'GET',
            url: 'https://restful-booker.herokuapp.com/booking ',


        }).then((response) => {
            expect(response.status).to.eq(200)
            cy.log(JSON.stringify(response))
        })
    })

    //Get Method
    it('Filter by name', () => {
        cy.request({
            method: 'GET',
            url: 'https://restful-booker.herokuapp.com/booking?firstname=Antony&lastname=Gates ',


        }).then((response) => {
            expect(response.status).to.eq(200)
        })
    })

    //Get Method
    it('Filter by checkin/checkout date', () => {
        cy.request({
            method: 'GET',
            url: 'https://restful-booker.herokuapp.com/booking?checkin=2017-11-01&checkout=2021-11-05 ',


        }).then((response) => {
            expect(response.status).to.eq(200)
            cy.log(JSON.stringify(response))

        })
    })

    //Get Method
    it('Get booking ', () => {

        cy.request({
            method: 'GET',
            url: 'https://restful-booker.herokuapp.com/booking/705',   


        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.firstname).to.eq("Antony")
            expect(response.body.lastname).to.eq("Gates")
            expect(response.body.totalprice).equal(890)
            expect(response.body.additionalneeds).equal("Breakfast & Dinner")
            expect(response.body.bookingdates.checkin).equal("2022-11-01")
            expect(response.body.bookingdates.checkout).equal("2022-11-05")
            expect(response.body.depositpaid).equal(false)

        })
    })






})