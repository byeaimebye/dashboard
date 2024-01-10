// cypress/integration/dashboard.spec.ts

describe('Dashboard Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Should display the select date ranges', () => {
    cy.contains('HOY').should('exist')
    cy.contains('7D').should('exist')
    cy.contains('Este mes').should('exist')
    cy.contains('6M').should('exist')
    cy.contains('YTD/YTG').should('exist')
    cy.contains('1a').should('exist')
    cy.contains('Max').should('exist')
    cy.contains('Personalizado').should('exist')
  })

  it('Should display relevant data for "HOY" range', () => {
    // Select the "HOY" date range
    cy.contains('HOY').click()

    // Assert that the component displays relevant data for "HOY"
    cy.get('.MuiTableRow-root').should('be.visible')
  })
  it('Should display relevant data for "7D" range', () => {
    cy.contains('7D')
      .click()
      .then(() => {
        cy.contains('Lunes')
      })
    cy.get('.MuiTableRow-root').should('be.visible')
  })
})
