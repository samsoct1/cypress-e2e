describe('Positive Test Case', () => {
    it('Logs in and Toggles the Switch', () => {
      // Visit the login page
      cy.visit('https://qa.d3skkfzjfy3kf2.amplifyapp.com');
  
      // Enter valid credentials
      cy.get('input[type="text"]').type('admin@acuity.com');
      cy.get('input[type="password"]').type('test@111');
  
      // Check and verify checkbox
      cy.get('input[type="checkbox"]').check().should('be.checked');
  
      // Click login button
      cy.get('button[type="submit"]').click();
  
      // Ensure the page has loaded before proceeding
      cy.wait(2000); // Adjust this if needed
  
      // Navigate to the relevant tab
      cy.get('div.MuiBox-root').eq(4).click();
      cy.get("div[value='4'] p.MuiTypography-root.MuiTypography-body2.tab-label-item.css-1tw1rdj").click();
  
      // Ensure the table and buttons are present before interacting
      cy.xpath("(//td[contains(@class, 'MuiTableCell-root')]//button)[1]").should('be.visible').click();
  
   
   
  
      // **Find and alias the toggle switch correctly**
      cy.get('input[type="checkbox"]').eq(2).as('toggleSwitch');
  
      // **Handle case where checkbox is missing or not in expected index**
      cy.get('@toggleSwitch').should('exist').then(($toggle) => {
        if (!$toggle.is(':checked')) {
          cy.get('@toggleSwitch').check().should('be.checked');
          cy.log('Toggle Enabled');
        }
      });
  
      // Wait briefly (optional)
      cy.wait(500);
  
      // Toggle the switch OFF if it's ON
      cy.get('@toggleSwitch').then(($toggle) => {
        if ($toggle.is(':checked')) {
          cy.get('@toggleSwitch').uncheck().should('not.be.checked');
          cy.log('Toggle Disabled');
        }
      });
    });
  });
  