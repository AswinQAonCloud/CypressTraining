context('api testing', function(){
 
    it('GET- list  user', function(){
   cy.request('GET','https://reqres.in/api/users?page=2').then((response)=>{
      expect(response.status).equal(200)
      expect(response.body.data[0].first_name).equal("Michael")   // check the user by the data order
   }) 
   })  
   
   it('GET- single user', function(){
    
       var user={
           "email": "janet.weaver@reqres.in"
       }
       cy.request('POST','https://reqres.in/api/users',user).then((response)=>{
          expect(response.status).equal(201)
        expect(response.body.email).equal(user.email)
   })
   })
   
   it ('GET- list <resourcces>', function(){
       var user={
           "page": 1,
           "per_page": 6,
           "total": 12,
           "total_pages": 2
       }
       cy.request('GET', 'https://reqres.in/api/unknown').then((response)=>{
       expect(response.status).equal(200)
       expect(response.body.page).equal(user.page)
       expect(response.body.per_page).equal(user.per_page)
       expect(response.body.total).equal(user.total)
       expect(response.body.total_pages).equal(user.total_pages)
       }) 
       })
    
   it('POST- create', function(){
       var user={
           "name": "Aswin",
           "job": "Tester"
       }
       cy.request('POST','https://reqres.in/api/users',user).then((response)=>{
          expect(response.status).equal(201)
          expect(response.body.name).equal(user.name)
          expect(response.body.job).equal(user.job)   
       }) 
       })
    
   it('DELETE-DELETE user', function(){
       
       cy.request('DELETE','https://reqres.in/api/users/2').then((response)=>{
          expect(response.status).equal(204)
       })
   })
   
   it('PATCH-Update user', function(){
       let user={
           "name": "Aswin",
           "job": "QA"
       }
       cy.request('PATCH','https://reqres.in/api/users/2',user).then((response)=>{
          expect(response.status).equal(200)
          expect(response.body.name).equal(user.name)
          expect(response.body.job).equal(user.job)
       })
   })
   
   it('POST- register', function(){
       var user={
           "email": "eve.holt@reqres.in",   
           "password": "pistol"
       }
       cy.request('POST',"https://reqres.in/api/register",user).then((response)=>{
          expect(response.status).equal(200)
          expect(response.body.email).not.equal(user.email)
          expect(response.body.password).not.equal(user.password)   // not equal from the response data id and token   
       }) 
       }) 
   
       it('POST- register2', function(){
           var user={
               "email": "eve.holt@reqres.in",   
               "password": "pistol"
           }
           cy.request('POST',"https://reqres.in/api/register",user).then((response)=>{
              expect(response.status).equal(200)
              expect(response.body.email).equal(user.id)
              expect(response.body.password).equal(user.token)     
           }) 
           }) 
   
        it('GET- Delayed response', function(){
           cy.request('GET','https://reqres.in/api/users??delay=3').then((response)=>{   
              expect(response.status).equal(200)
              expect(response.body.data[0].first_name).equal("George")
              expect(response.body.data[1].last_name).equal("Weaver")
              expect(response.body.data[2].email).equal("emma.wong@reqres.in")
             // expect(response.body.data[3].id).equal('4')
           }) 
           })
   
           it('PUT- update', function(){
               cy.request('PUT','https://reqres.in/api/users/2').then((response)=>{   
                  expect(response.status).equal(200)
               }) 
               })
   
   })