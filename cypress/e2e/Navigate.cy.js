describe('Positive Test Case', () => {
    it('Logs in successfully to Acuity Home page', () => {
      // Open the login page
      cy.visit('https://qa.d3skkfzjfy3kf2.amplifyapp.com');
      cy.wait(1000);
  
      // Enter valid username and password
      cy.get('input[type="text"]').type('admin@acuity.com');
      cy.wait(2000);
      cy.get('input[type="password"]').type('test@111');
  
    
  
      // "Remember Me" checkbox funtionality 
      cy.get('input[type="checkbox"]').check().should('be.checked');
      cy.wait(2000);
      cy.get('input[type="checkbox"]').uncheck().should('not.be.checked');
  
      // Click the login button
      cy.get('button[type="submit"]').click();
      cy.wait(2000);
      cy.log('Logged in successfully');
      console.log('Logged in successfully');
  
      // Navigation to profile section
      cy.get('img[alt="Remy Sharp"]').click();
      cy.wait(1000);
      cy.xpath('(//div[@id="primary-search-account-menu"]//li)[1]').click();
  
      //Displying Details
      // Get Profile Name
      cy.get('input[value="Alex Szabo"]').invoke('val').then((profileName) => {
        cy.log('Profile Name: ' + profileName);
        console.log('Profile Name:', profileName);
      });
  
      // Get Company Name
      cy.get('input[value="Acuity"]').invoke('val').then((companyName) => {
        cy.log('Company Name: ' + companyName);
        console.log('Company Name:', companyName);
      });
  
      // Get Phone Number
      cy.get('input[type="tel"]').invoke('val').then((phoneNumber) => {
        cy.log('Phone Number: ' + phoneNumber);
        console.log('Phone Number:', phoneNumber);
      });
  
      
      });
  });

    




    

  