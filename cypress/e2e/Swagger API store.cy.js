

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
});

describe('Swagger UI PetStore', function () {

    //Post Method
    it('POST/Place an order for pet', function () {

        var user = {
            "id": 3,
            "petId": 4,
            "quantity": 10000,
            "shipDate": "2022-11-07T04:35:07.978+0000",
            "status": "ordered",
            "complete": false
        }
        cy.request('POST', 'https://petstore.swagger.io/v2/store/order', user).then((response) => {
            expect(response.status).equal(200)
            expect(response.body.id).equal(user.id)
            expect(response.body.petId).equal(user.petId)
            expect(response.body.quantity).equal(user.quantity)
            expect(response.body.shipDate).equal(user.shipDate)
            expect(response.body.status).equal(user.status)
            expect(response.body.complete).equal(user.complete)
        })
    })

    //Get Method.Find Purchase Order using ID
    it('GET/Find Purchase Order using ID', function () {

        cy.request({

            method: 'GET',
            url: 'https://petstore.swagger.io/v2/store/order/3',  //using id

        }).then((response) => {

            expect(response.status).to.eq(200)
            expect(response.body.id).to.eq(3)
            expect(response.body.petId).to.eq(4)
            expect(response.body.quantity).equal(10000)
            expect(response.body.status).equal("ordered")
            expect(response.body.complete).equal(false)

        })
    })

    //Post Method
    it('POST/Place an order for pet', function () {

        var user = {
            "id": 5,
            "petId": 2,
            "quantity": 105000,
            "shipDate": "2022-11-07T04:35:07.978+0000",
            "status": "working",
            "complete": false
        }
        cy.request('POST', 'https://petstore.swagger.io/v2/store/order', user).then((response) => {
            expect(response.status).equal(200)
            expect(response.body.id).equal(user.id)
            expect(response.body.petId).equal(user.petId)
            expect(response.body.quantity).equal(user.quantity)
            expect(response.body.shipDate).equal(user.shipDate)
            expect(response.body.status).equal(user.status)
            expect(response.body.complete).equal(user.complete)
        })
    })
    //Delete Method
    it('DELETE-using ID', function () {

        cy.request({

            method: 'DELETE',
            url: 'https://petstore.swagger.io/v2/store/order/5',  //using ID

        }).then((response) => {

            expect(response.status).to.eq(200)


        })

    })

})


