describe('Pruebas para el componente Home', () => {
  it('Debería cargar la página principal y verificar la existencia de los elementos', () => {
    cy.visit('http://localhost:3000/') 
    cy.get('button').should('contain', 'Dashboard')
    cy.get('button').should('contain', 'Clientes')
    cy.get('button').should('contain', 'Reglas de acumulacion')
  })
})
