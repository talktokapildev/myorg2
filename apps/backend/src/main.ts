// // console.log('Hello World!');

// import { Server } from 'miragejs';
// // var http = require('http');

// // http
// //   .createServer(function (req, res) {
// //     res.writeHead(200, { 'Content-Type': 'text/plain' });
// //     res.end('Hello World!');
// //   })
// //   .listen(3333);

// //import { Server } from "miragejs"
// export function makeServer() {
//   let server = new Server();
//   server.get('/api/users', () => {
//     return { users: [{ id: 1, name: 'Bob' }] };
//   });

//   return server;
// }

// let server = new Server();
// server.get('/api/users', () => {
//   return { users: [{ id: 1, name: 'Bob' }] };
// });

// // new Server({
// //   routes() {
// //     this.namespace = 'api';

// //     this.get('/movies', () => {
// //       return {
// //         movies: [
// //           { id: 1, name: 'Inception', year: 2010 },
// //           { id: 2, name: 'Interstellar', year: 2014 },
// //           { id: 3, name: 'Dunkirk', year: 2017 },
// //         ],
// //       };
// //     });
// //   },
// // });

// src/server.js
import { Server, Model } from 'miragejs';

export function makeServer({ environment = 'development' } = {}) {
  let server = new Server({
    environment,

    models: {
      user: Model,
    },

    seeds(server) {
      server.create('user', { name: 'Bob1' } as any);
      server.create('user', { name: 'Alice' } as any);
    },

    routes() {
      this.namespace = 'api';

      this.get('/users', (schema) => {
        return (schema as any).users.all();
      });
    },
  });

  return server;
}
