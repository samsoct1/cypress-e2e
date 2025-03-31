describe('positive test case', () => {
    it('Visits Acuity login page', () => {
      cy.visit('https://qa.d3skkfzjfy3kf2.amplifyapp.com')
      cy.wait(1000)
     
           cy.get('input[type="text"]').type('admin@acuity.com');
           cy.wait(2000)
           cy.get('input[type="password"]').type('test@111')
           cy.get('.MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium.css-vubbuv').click()
           cy.get('button[type="submit"]').click() 
           cy.wait(2000)
           cy.get('input[placeholder="Search"]') 
          .should('be.visible')
          .type('Digiryte PVT LTD');
          cy.location('pathname').should('include', '/admin/home');
          cy.wait(2000)
           cy.get('input[placeholder="Search"]')
         .should('be.visible')
         
         .clear()
        .type('Dinesh');
         cy.location('pathname').should('include', '/admin/home');
          cy.wait(2000)
          cy.get('img[alt="Remy Sharp"]').should('be.visible'); 
          cy.get('div#primary-search-account-menu li:nth-child(3)').click();

          
          cy.url().should('include', '/login');
          
         
          
     
      })
  })
        
  describe('Negative Test case', () => {
    it('should display an error message for invalid credentials', () => {
        cy.wait (1000)
      cy.visit('https://qa.d3skkfzjfy3kf2.amplifyapp.com/'); 
      cy.get('input[type="text"]').type('admin@acuity.com');
      cy.get('input[type="password"]').type('test@1111')
      cy.get('button[type="submit"]').click()

      cy.wait(1000)
      cy.contains('span', 'Invalid login credentials. Please try again.')
    
    });
  });

  describe('Forget password', () => {
    it('Reset password mail ', () => {
        cy.visit('https://qa.d3skkfzjfy3kf2.amplifyapp.com/'); 
        cy.contains('span', 'Forgot Password?').click()
        cy.wait(1000)
        //cy.visit('https://qa.d3skkfzjfy3kf2.amplifyapp.com/auth/forgot-password'); 
       // cy.wait(1000)//
        cy.get('input[type="text"]').type('employeetest46@gmail.com');
        cy.get('button[type="submit"]').click()
        cy.contains('span','Password reset link has been sent to your email')

      
    });
  });
  
  