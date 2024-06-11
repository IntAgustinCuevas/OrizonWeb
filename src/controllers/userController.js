import User from '../models/userModel.js';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const userController = {
    createUser: async (req , res) => {
        const { userName, email, password, clientCode } = req.body;

        try{
            let existUser = await User.findOne({ email: email});
            
            if(existUser){
                return res.status(400).json({ message: 'El email ya esta asociado a un usuario'});
            }

                
            if(!existUser){
                
                const hashedPassword = await bcrypt.hash(password,10);

                const token = jwt.sign({ email }, `${process.env.SECRET_KEY}`);

                const userType = () => {
                    
                    if(clientCode.startsWith('AA')){
                        return 'userP1';
                    }
                    else if(clientCode.startsWith('BB')){
                        return 'userP2';
                    }
                    else{

                    }
                }
            }
        }
        catch{

        }
    } 
}

export default userController;