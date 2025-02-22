Cypress.on('uncaught:exception', (err, runnable) => {
    return false
});
context("Json-PlaceholderAPI Practice", () => {

    it('POST Method', () => {
        var UserData =
        {
            "name": "Aswinkumar",
            "age": 24,
            "language": "tamil",
            "dob": "1/1/1999",
            "city": "Coimbatore",
            "state": "tamilnadu"

        }
        cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', UserData).then((response) => {
            cy.log(JSON.stringify(response))
            expect(response.status).equal(201)
            expect(response.body.id).equal(101)
            expect(response.body.name).equal('Aswinkumar')
            expect(response.body.age).equal(24)
            expect(response.body.language).equal('tamil')
            expect(response.body.dob).equal('1/1/1999')
            expect(response.body.city).equal('Coimbatore')
            expect(response.body.state).equal('tamilnadu')
        })
    })


    it('GET Method for Posts', () => {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts',).then((response) => {
            cy.log(JSON.stringify(response))
            expect(response.status).equal(200)
            expect(response.body[1].userId).equal(1)
            expect(response.body[1].title).equal('qui est esse')
            expect(response.body[3].userId).equal(1)
            expect(response.body[71].title).equal('sint hic doloribus consequatur eos non id')
            expect(response.body[19].title).equal('doloribus ad provident suscipit at')
            expect(response.body[15].title).equal('sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio')
            expect(response.body[45].title).equal('aut quo modi neque nostrum ducimus')
            expect(response.body[90].title).equal('aut amet sed')
            expect(response.body[19].body).equal('qui consequuntur ducimus possimus quisquam amet similique\nsuscipit porro ipsam amet\neos veritatis officiis exercitationem vel fugit aut necessitatibus totam\nomnis rerum consequatur expedita quidem cumque explicabo')
            expect(response.body[30].body).equal('debitis eius sed quibusdam non quis consectetur vitae\nimpedit ut qui consequatur sed aut in\nquidem sit nostrum et maiores adipisci atque\nquaerat voluptatem adipisci repudiandae')
            expect(response.body[60].body).equal('ab nemo optio odio\ndelectus tenetur corporis similique nobis repellendus rerum omnis facilis\nvero blanditiis debitis in nesciunt doloribus dicta dolores\nmagnam minus velit')
            expect(response.body[88].body).equal('repellat aut aperiam totam temporibus autem et\narchitecto magnam ut\nconsequatur qui cupiditate rerum quia soluta dignissimos nihil iure\ntempore quas est')
        })
    })

    it('GET method for Posts Using id number', () => {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/2',).then((response) => {
            expect(response.status).equal(200)
            expect(response.body.userId).equal(1)
            expect(response.body.title).equal('qui est esse')
            expect(response.body.id).equal(2)
            expect(response.body.body).equal('est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla')
        })
        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/55',).then((response) => {
            expect(response.status).equal(200)
            expect(response.body.userId).equal(6)
            expect(response.body.title).equal('sit vel voluptatem et non libero')
            expect(response.body.id).equal(55)
            expect(response.body.body).equal('debitis excepturi ea perferendis harum libero optio\neos accusamus cum fuga ut sapiente repudiandae\net ut incidunt omnis molestiae\nnihil ut eum odit')
        })

        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/70',).then((response) => {
            expect(response.status).equal(200)
            expect(response.body.userId).equal(7)
            expect(response.body.title).equal('voluptatem laborum magni')
            expect(response.body.id).equal(70)
            expect(response.body.body).equal('sunt repellendus quae\nest asperiores aut deleniti esse accusamus repellendus quia aut\nquia dolorem unde\neum tempora esse dolore')
        })
    })

    it('GET Method for Comments', () => {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1/comments',).then((response) => {
            cy.log(JSON.stringify(response))
            expect(response.status).equal(200)
            expect(response.body[1].postId).equal(1)
            expect(response.body[3].postId).equal(1)
            expect(response.body[2].name).equal('odio adipisci rerum aut animi')
            expect(response.body[3].name).equal('alias odio sit')
            expect(response.body[4].name).equal('vero eaque aliquid doloribus et culpa')
            expect(response.body[2].email).equal('Nikita@garfield.biz')
            expect(response.body[3].email).equal('Lew@alysha.tv')
            expect(response.body[4].email).equal('Hayden@althea.biz')
            expect(response.body[2].body).equal('quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione')
            expect(response.body[3].body).equal('non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati')
            expect(response.body[4].body).equal('harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et')
        })
    })

    it('GET method  Comments for Post id', () => {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/comments?postId=1', { 'failOnStatusCode': false }).then((response) => {
            expect(response.status).equal(200)
            expect(response.body[4].id).equal(5)
            expect(response.body[2].id).equal(3)
            expect(response.body[1].name).equal('quo vero reiciendis velit similique earum')
            expect(response.body[2].name).equal('odio adipisci rerum aut animi')
            expect(response.body[3].name).equal('alias odio sit')
            expect(response.body[4].name).equal('vero eaque aliquid doloribus et culpa')

            expect(response.body[2].email).equal('Nikita@garfield.biz')
            expect(response.body[3].email).equal('Lew@alysha.tv')
            expect(response.body[4].email).equal('Hayden@althea.biz')

            expect(response.body[2].body).equal('quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione')
            expect(response.body[3].body).equal('non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati')
            expect(response.body[4].body).equal('harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et')

        })
    })

    it('Put Method for update Userdata ', () => {
        var UserData =
        {
            "Status": "single",
            "Work": "Information Technology",
        }
        cy.request('PUT', 'https://jsonplaceholder.typicode.com/posts/3', UserData).then((response) => {
            cy.log(JSON.stringify(response))
            expect(response.status).equal(200)
            expect(response.body.id).equal(3)
            expect(response.body.Status).equal('single')
            expect(response.body.Work).equal('Information Technology')
        })
        var UserData2 =
        {
            "APIMethod": "Death Note",
            "Director": "Aswinkumar",
        }
        cy.request('PUT', 'https://jsonplaceholder.typicode.com/posts/4', UserData2).then((response) => {
            cy.log(JSON.stringify(response))
            expect(response.status).equal(200)
            expect(response.body.id).equal(4)
            expect(response.body.APIMethod).equal('Death Note')
            expect(response.body.Director).equal('Aswinkumar')
        })
    })

    it('PATCH Method for partially update user data', () => {
        var UserData =
        {
            "Music": "Harris",
            "singer": "Hariharan",
            "language": "Tamil"
        }
        cy.request('PATCH', 'https://jsonplaceholder.typicode.com/posts/25', UserData).then((response) => {
            cy.log(JSON.stringify(response))
            expect(response.status).equal(200)
            expect(response.body.id).equal(25)
            expect(response.body.title).equal('rem alias distinctio quo quis')
            expect(response.body.body).equal('ullam consequatur ut\nomnis quis sit vel consequuntur\nipsa eligendi ipsum molestiae et omnis error nostrum\nmolestiae illo tempore quia et distinctio')
            expect(response.body.Music).equal('Harris')
            expect(response.body.singer).equal('Hariharan')
            expect(response.body.language).equal('Tamil')
        })
        var UserData =
        {
            "cast": 'Aswin',
            "producedBY": "AK studios",
            "screenplay": "Anand"
        }
        cy.request('PATCH', 'https://jsonplaceholder.typicode.com/posts/50', UserData).then((response) => {
            cy.log(JSON.stringify(response))
            expect(response.status).equal(200)
            expect(response.body.id).equal(50)
            expect(response.body.title).equal('repellendus qui recusandae incidunt voluptates tenetur qui omnis exercitationem')
            expect(response.body.body).equal('error suscipit maxime adipisci consequuntur recusandae\nvoluptas eligendi et est et voluptates\nquia distinctio ab amet quaerat molestiae et vitae\nadipisci impedit sequi nesciunt quis consectetur')
            expect(response.body.cast).equal('Aswin')
            expect(response.body.producedBY).equal('AK studios')
            expect(response.body.screenplay).equal('Anand')
        })
    })
    
    it('Delete method by Using UserID', () => {
        cy.request('DELETE', 'https://jsonplaceholder.typicode.com/posts/7',).then((response) => {
            expect(response.status).equal(200)
        })
    })  
})
