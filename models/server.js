const express = require('express');
const cors = require('cors');
const routerRoot = require('../routers/routerRoot');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.pathRoot = process.env.PATH_ROOT;
    this.middleware();
    this.routes();
  }

  middleware() {
    //   CORS
    this.app.use(cors());

    // lectura y parseo
    this.app.use(express.json());
    // Public directory
    this.app.use(express.static('public'));
  }

  routes() {
    this.app.use(this.pathRoot, routerRoot);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('Server Online in PORT:', this.port);
    });
  }
}
module.exports = Server;
