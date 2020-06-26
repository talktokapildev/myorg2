import { getGreeting } from '../support/app.po';
import { Server, Model } from 'miragejs';

let server;

beforeEach(() => {
  server = new Server({
    models: {
      movie: Model,
    },

    routes() {
      this.namespace = 'api';

      (this as any).resource('movie');
    },
  });
});

afterEach(() => {
  server.shutdown();
});

describe('frontend', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    server.createList('movie', 10);
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('Welcome to frontend1!');
  });
});
