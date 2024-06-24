import express from 'express';
import userController from '../controllers/userController.js';
import validationMiddleware from '../middlewares/validationMiddleware.js';

const userRouter = express.Router();

// Endpoint for register new user //
userRouter.post('/register', validationMiddleware.validationSignUp() ,userController.createUser);

export default userRouter;