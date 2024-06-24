import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Configuracion //
const viewRouter = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
viewRouter.use(express.static(path.join(__dirname , '../../public')));

// Rutas para servir archivos HTML //
viewRouter.get('/signup' , (req,res) => {
    try{
        res.sendFile(path.join(__dirname, '../../public/signup.html'));
    }
    catch (error){
        console.error(error);
    }
});

viewRouter.get('/login' , (req,res) => {
    try{
        res.sendFile(path.join(__dirname, '../../public/login.html'));

    }
    catch (error){
        console.error(error);
    }
})



export default viewRouter;