const { cyan } = require("ansi-colors");


describe('get list of books', ()=>{

    it('get books', ()=>{

        cy.request({
            method : 'GET',
            url : 'https://demoqa.com/BookStore/v1/Books',
        }).then((res)=>{
            expect(res.status).to.eq(200)
        })

        cy.request({
            method : 'GET',
            url : 'https://demoqa.com/BookStore/v1/Book?ISBN=9781449365035',
        }).then((res)=>{
            expect(res.status).to.eq(200)
        })
        cy.fixture('createuser').then((payload)=>{
        cy.request({
            method : 'POST',
            url : 'https://demoqa.com/Account/v1/User',
            body: {
                "userName": payload.userName,
                "password": payload.password 
                  }
        }).then((res)=>{
            //expect(res.status).to.eq(201)
            expect(res.body.data).has.property('userName', dummy1311)
        })
    })
})
})