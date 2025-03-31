// Log in successfully
describe('positive test case', () => {
    it('Visits Acuity login page', () => {
      cy.visit('https://qa.d3skkfzjfy3kf2.amplifyapp.com')
      cy.wait(1000)
     
           cy.get('input[type="text"]').type('admin@acuity.com');
           cy.wait(2000)
           cy.get('input[type="password"]').type('test@111')
           console.log('Test execution started');  
           
// button clicking funtionality

           cy.get('button[type="submit"]').click() 
           cy.wait(2000)
 // searching the keyword         
           cy.get('input[placeholder="Search"]') 
           .should('be.visible')
           .type('Digiryte PVT LTD');
           cy.location('pathname').should('include', '/admin/home');
           cy.wait(5000)

   // clearing/ removing the inputted data        
           cy.get('input[placeholder="Search"]')
           .should('be.visible')
           .clear()
          .type('ABC consult');
          cy.location('pathname').should('include', '/admin/home');
          cy.wait(5000)
          })
  })
        // Invalid credentails
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

  
  

  // Reseting password

  describe('Forget password', () => {
    it('Reset password mail ', () => {
        cy.visit('https://qa.d3skkfzjfy3kf2.amplifyapp.com/'); 
        cy.contains('span', 'Forgot Password?').click()
        cy.wait(1000)
        cy.get('input[type="text"]').type('employeetest46@gmail.com');
        cy.get('button[type="submit"]').click()
        cy.contains('span','Password reset link has been sent to your email')
    

      
    });
  });
  
  