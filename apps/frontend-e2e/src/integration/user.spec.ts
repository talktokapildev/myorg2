import { makeServer } from '@app/backend/src/main';

let server;

beforeEach(() => {
  server = makeServer({ environment: 'test' });
});

afterEach(() => {
  server.shutdown();
});

it('shows the users from our server', () => {
  server.create('user', { id: 1, name: 'Luke' });
  server.create('user', { id: 2, name: 'Leia' });

  cy.visit('/');

  cy.get('[id="user-1"]').contains('Luke');
  cy.get('[id="user-2"]').contains('Leia');
});

// it("shows a message if there are no users", () => {
//   // Don't create any users

//   cy.visit("/")

//   cy.get('[data-testid="no-users"]').should("be.visible")
// })
