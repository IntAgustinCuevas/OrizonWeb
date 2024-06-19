import dotenv from 'dotenv';
import app from './app.js'
import connectDB from './database.js';

// Configuration //
dotenv.config();
connectDB();

// variables de entorno //

const PORT = process.env.PORT;

app.listen( PORT , () => {
    try{
        console.log(`###Server running on Port: ${PORT}###`);
    }
    catch(error) {
        console.error("App listening error: " , error);
    }
})
