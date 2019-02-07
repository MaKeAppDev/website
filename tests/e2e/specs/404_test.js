// https://docs.cypress.io/api/introduction/api.html

describe('Routing Test', () => {
  it('Visits not existing url', () => {
    cy.visit('/foobar');
    cy.contains('404 Not Found');
  });
});
