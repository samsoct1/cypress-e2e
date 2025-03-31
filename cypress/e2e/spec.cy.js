describe('positive test case', () => {
  it('Visits Acuity login page', () => {
    cy.visit('https://qa.d3skkfzjfy3kf2.amplifyapp.com')
    cy.wait(1000)
   
         cy.get('input[type="text"]').type('admin@acuity.com');
         cy.get('input[type="password"]').type('test@111')
         cy.get('button[type="submit"]').click() 
         cy.wait(1000)
         cy.get('input[placeholder="Search"]') 
        .should('be.visible')
        .type('Digiryte PVT LTD');
        cy.location('pathname').should('include', '/admin/home');
         cy.get('input[placeholder="Search"]')
       .should('be.visible')
       .clear()
       .type('Dinesh');

      
      });
         
   
    })
   
     
      
   
  


