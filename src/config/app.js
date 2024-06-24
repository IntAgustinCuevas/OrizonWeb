import express from 'express';
import userRouter from '../routes/userRouter.js';
import viewRouter from '../routes/viewRouter.js';

// Configuracion //
const app = express();

// Middlewares globales //
app.use(express.json());

// Montado de endpoints de la API //
app.use('/api/users' , userRouter);
app.use('/view' , viewRouter)

export default app;