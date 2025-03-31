describe('login URL', () => {
  it('Visits Acuity login page', () => {
    cy.visit('https://develop.dcad0fg2xzyt3.amplifyapp.com/auth/login')
    cy.wait(1000)
    cy.get('#Username').type('admin@acuity.com')
    //cy.get('#Password').type('test@111')//
    cy.get('input[type="password"]')
    cy.get('body').click()
    cy.get('.MuiInputAdornment-root > .MuiButtonBase-root').click()
    
    cy.get('#myBtn').click()
    cy.get('MuiSvgIcon-root').click()
    cy.get('MuiTypography-root MuiTypography-h2').click()
  })
})