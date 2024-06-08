import dotenv from 'dotenv';
import app from './app.js'
import connectDB from './database.js';

dotenv.config();

connectDB();

app.listen( process.env.PORT , () => {
    try{
        console.log(`Server running on Port: ${process.env.PORT}`);
    }
    catch(error) {
        console.error("App listening error: " , error);
    }
})
