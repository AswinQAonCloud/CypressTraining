Cypress.on('uncaught:exception', (err, runnable) => {
    return false
});

describe('Swagger API', function () {

    //Post Method
    it('POST - Add pet to store', function () {

        var user = {
            "id": 100,
            "category": {
                "id": 105,
                "name": "DOG"
            },
            "name": "Rottweiler",
            "photoUrls": [
                "https://dogtime.com/dog-breeds/rottweiler#/slide/1"
            ],
            "tags": [
                {
                    "id": 107,
                    "name": "Germany"
                }
            ],
            "status": "pending"
        }
        cy.request('POST', 'https://petstore.swagger.io/v2/pet', user).then((response) => {
            expect(response.status).equal(200)
            expect(response.body.name).equal(user.name)
            expect(response.body.id).equal(user.id)
            expect(response.body.status).equal(user.status)
            expect(response.body.category.name).equal(user.category.name)
            expect(response.body.photoUrls[0]).equal(user.photoUrls[0])
            expect(response.body.tags[0].name).equal(user.tags[0].name)
        })
    })


    //Get Method
    it('GET-using ID', function () {

        cy.request({

            method: 'GET',
            url: 'https://petstore.swagger.io/v2/pet/100',  //using ID

        }).then((response) => {

            expect(response.status).to.eq(200)
            expect(response.body.id).to.eq(100)
            expect(response.body.name).to.eq("Rottweiler")
            expect(response.body.category.name).equal("DOG")
            expect(response.body.category.id).equal(105)

        })

    })
    it('GET-using status', function () {

        cy.request({

            method: 'GET',
            url: 'https://petstore.swagger.io/v2/pet/findByStatus?status=available&status=pending&status=sold',  //using status

        }).then((response) => {

            expect(response.status).to.eq(200)
        })
    })


    //Put Method
    it('PUT', function () {

        var user = {
            "id": 100,
            "category": {
                "id": 105,
                "name": "CAT"    //updated
            },
            "name": "birman",
            "photoUrls": [
                "https://www.purina.co.uk/find-a-pet/cat-breeds/birman"  //updated
            ],
            "tags": [
                {
                    "id": 107,
                    "name": "France"  //updated
                }
            ],
            "status": "sold"  // updated
        }
        cy.request('PUT', 'https://petstore.swagger.io/v2/pet', user).then((response) => {
            expect(response.status).equal(200)
            expect(response.body.name).equal(user.name)
            expect(response.body.id).equal(user.id)
            expect(response.body.status).equal(user.status)
            expect(response.body.category.name).equal(user.category.name)
            expect(response.body.photoUrls[0]).equal(user.photoUrls[0])
            expect(response.body.tags[0].name).equal(user.tags[0].name)
        })
    })


    //Delete Method
    it('DELETE-using ID', function () {

        cy.request({

            method: 'DELETE',
            url: 'https://petstore.swagger.io/v2/pet/100',  //using ID

        }).then((response) => {

            expect(response.status).to.eq(200)
        })

    })

})
