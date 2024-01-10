it('Debe mostrar información clave después de la carga exitosa', () => {
  cy.visit('http://localhost:3000/')
  // Simulamos una carga exitosa de datos
  cy.intercept('/api/chartsService', { fixture: 'asideData.json' })
  cy.wait(1500)
  // Esperamos a que la carga de datos se complete
  cy.contains('Ventas totales').should('exist')
  cy.contains('Monto total').should('exist')
  cy.contains('Cashback').should('exist')
  cy.contains('Acumulado').should('exist')
  cy.contains('Facturado').should('exist')
  cy.contains('Enero').should('exist') 
})
