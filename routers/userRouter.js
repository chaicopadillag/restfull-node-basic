const { Router } = require('express');
const userRouter = Router();

const { getAllUsers, createUser, updateUser, deleteUser } = require('../controllers/userController');

userRouter.get('/', getAllUsers);

userRouter.post('/', createUser);

userRouter.put('/:user', updateUser);

userRouter.delete('/', deleteUser);

module.exports = userRouter;
