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
            expect(res.body.data).has.property('userName', payload.userName)
        })
    })