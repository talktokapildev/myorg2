import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
// tslint:disable-next-line: nx-enforce-module-boundaries
import { makeServer } from '@app/backend/src/main';
//import { makeServer } from 'apps/backend/src/main';
//import { Server } from 'miragejs';
import { Server, Response } from 'miragejs';

if ((window as any).Cypress) {
  // tslint:disable-next-line: no-unused-expression
  new Server({
    environment: 'test',
    routes() {
      let methods = ['get', 'put', 'patch', 'post', 'delete'];
      methods.forEach((method) => {
        this[method]('/*', async (schema, request) => {
          let [status, headers, body] = await (window as any).handleFromCypress(
            request
          );
          return new Response(status, headers, body);
        });
      });
    },
  });
}

if (environment.production) {
  enableProdMode();
} else {
  console.log('da');
  //makeServer();
  // let server = new Server();
  // server.get('/api/users', () => {
  //   return { users: [{ id: 1, name: 'Bob' }] };
  // });
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
