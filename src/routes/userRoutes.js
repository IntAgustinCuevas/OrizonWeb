import express, { Router } from 'express';
import userController from '../controllers/userController';
import validationMiddleware from '../middlewares/validationMiddleware';

const router = express.Router();

// Endpoint for register new user //
router.post('/register', validationMiddleware.validationSignUp, userController.createUser);

export default router;