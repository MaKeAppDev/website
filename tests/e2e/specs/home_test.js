// https://docs.cypress.io/api/introduction/api.html

describe('Home View Test', () => {
  it('Visits the app root url and has navbar home', () => {
    cy.visit('/');
    cy.contains('Home');
  });
  it('Visits the app root url and should have nav items', () => {
    cy.visit('/');
    cy.get('.nav-item').should('have.length.gt', 1);
  });
});
