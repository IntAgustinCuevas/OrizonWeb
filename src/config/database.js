import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const DB_URI = process.env.DB_URI;

const connectDB = async () => {
    try{
        await mongoose.connect( DB_URI, {   useNewUrlParser: true , useUnifiedTopology: true});
        console.log("###Connection completed to MongoDB data base###");
        }
    catch (error){
        console.error("Connection error: " , error);
    }
}

export default connectDB;



