const { Router } = require('express');
const userRouter = require('./userRouter');
const routerRoot = Router();

routerRoot.use('/users', userRouter);

module.exports = routerRoot;
