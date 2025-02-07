

describe('Update Booking', () => {


    it('Update booking using Put method', () => {

        cy.request({

            method: 'POST',
            url: 'https://restful-booker.herokuapp.com/booking',


            body: {
                "firstname": "Aswin",
                "lastname": "Kumar",
                "totalprice": 456,
                "depositpaid": true,
                "bookingdates": {
                    "checkin": "2018-09-03",
                    "checkout": "2022-05-06"
                },
                "additionalneeds": "Breakfast"
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.booking.firstname).equal('Aswin')
            expect(response.body.booking.lastname).equal('Kumar')
            expect(response.body.booking.totalprice).equal(456)
            expect(response.body.booking.depositpaid).equal(true)
            expect(response.body.booking.additionalneeds).equal('Breakfast')
            expect(response.body.booking.bookingdates.checkin).equal("2018-09-03")
            expect(response.body.booking.bookingdates.checkout).equal("2022-05-06")
        }).then((response) => {
            const userID = response.body.bookingid

            cy.log("User ID is : " + userID)

            //PUT METHOD

            cy.request({

                method: 'PUT',
                url: 'https://restful-booker.herokuapp.com/booking/' + userID,
                failOnStatusCode: false,
                headers: {
                    'authorization': "Basic YWRtaW46cGFzc3dvcmQxMjM="
                },
                body: {
                    "firstname": "AswinKmar",
                    "lastname": "AK",
                    "totalprice": 599,
                    "depositpaid": true,
                    "bookingdates": {
                        "checkin": "2020-01-08",
                        "checkout": "2021-05-06"
                    },
                    "additionalneeds": "dinner"
                }
            }).then((res) => {
                cy.log(JSON.stringify(response))
                expect(res.status).to.eq(200)
                expect(res.body.firstname).equal('AswinKmar')
                expect(res.body.lastname).equal('AK')
                expect(res.body.totalprice).equal(599)
                expect(res.body.depositpaid).equal(true)
                expect(res.body.additionalneeds).equal('dinner')
                expect(res.body.bookingdates.checkin).equal("2020-01-08")
                expect(res.body.bookingdates.checkout).equal("2021-05-06")

            })
        })
    })

it('partial Update booking using patch method', () => {

    cy.request({

        method: 'POST',
        url: 'https://restful-booker.herokuapp.com/booking',

        headers: {
            'authorization': "Basic YWRtaW46cGFzc3dvcmQxMjM="
        },
        body: {
            "firstname": "Aswin",
            "lastname": "Kumar",
            "totalprice": 333,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2019-07-03",
                "checkout": "2021-02-06"
            },
            "additionalneeds": "Breakfast"
        }
    }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.booking.firstname).equal('Aswin')
        expect(response.body.booking.lastname).equal('Kumar')
        expect(response.body.booking.totalprice).equal(333)
        expect(response.body.booking.depositpaid).equal(true)
        expect(response.body.booking.additionalneeds).equal('Breakfast')
        expect(response.body.booking.bookingdates.checkin).equal("2019-07-03")
        expect(response.body.booking.bookingdates.checkout).equal("2021-02-06")
    }).then((response) => {
        const userID = response.body.bookingid
        cy.log("User ID is : " + userID)
        //PATCH

        cy.request({

            method: 'PATCH',
            url: 'https://restful-booker.herokuapp.com/booking/' + userID,
            failOnStatusCode: false,

            headers: {
                'authorization': "Basic YWRtaW46cGFzc3dvcmQxMjM="
            },
            body: {
              //"firstname" : "Aswin", 
                "lastname": "AK", //updated
                "totalprice": 945, //updated
              //"depositpaid" : true,
                "bookingdates": {
                    "checkin": "2018-09-03", // updated
                    "checkout": "2022-05-06" // updated
                },
              //"additionalneeds" : "Breakfast"
            }

        }).then((response) => {
            cy.log(JSON.stringify(response))
            expect(response.status).to.eq(200)
            expect(response.body.firstname).to.eq('Aswin')
            expect(response.body.lastname).to.eq('AK')// updated
            expect(response.body.totalprice).to.eq(945) // updated
            expect(response.body.bookingdates.checkin).to.eq("2018-09-03") // updated 
            expect(response.body.bookingdates.checkout).to.eq("2022-05-06") //updated
            expect(response.body.depositpaid).to.eq(true)

            expect(response.body.additionalneeds).to.eq('Breakfast')

        })
    })
})


it('Delete booking using Delete method', () => {

    cy.request({

        method: 'POST',
        url: 'https://restful-booker.herokuapp.com/booking',

        headers: {
            'authorization': "Basic YWRtaW46cGFzc3dvcmQxMjM="
        },
        body: {
            "firstname": "Aswin",
            "lastname": "Kumar",
            "totalprice": 123,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2020-01-03",
                "checkout": "2021-04-06"
            },
            "additionalneeds": "Bike"
        }
    }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.booking.firstname).equal('Aswin')
        expect(response.body.booking.lastname).equal('Kumar')
        expect(response.body.booking.totalprice).equal(123)
        expect(response.body.booking.depositpaid).equal(true)
        expect(response.body.booking.additionalneeds).equal('Bike')
        expect(response.body.booking.bookingdates.checkin).equal("2020-01-03")
        expect(response.body.booking.bookingdates.checkout).equal("2021-04-06")
    }).then((response) => {
        const userID = response.body.bookingid
        cy.log("User ID is : " + userID)
        //DELETE

        cy.request({

            method: 'DELETE',
            url: 'https://restful-booker.herokuapp.com/booking/' + userID,
            failOnStatusCode: false,

            headers: {
                'authorization': "Basic YWRtaW46cGFzc3dvcmQxMjM="
            },

        }).then((response) => {
            cy.log(JSON.stringify(response))
            expect(response.status).to.eq(201)
        })
    })
})


it('Ping health check using GET', () => {

    cy.request('GET', 'https://restful-booker.herokuapp.com/ping').then((response) => {
        expect(response.status).equal(201)
        cy.log(JSON.stringify(response))
    })

})
})
