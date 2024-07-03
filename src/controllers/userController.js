import User from '../models/userModel.js';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
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

                let userType;
                    
                if(clientCode.startsWith('AA')){
                    userType ='userP1';
                }
                else if(clientCode.startsWith('BB')){
                    userType = 'userP2';
                }
                else{
                    return res.status(400).json({ message: 'El codigo de cliente no es valido.'});
                }
                
                const newUser = new User({

                    userName: userName,
                    email: email,
                    password: hashedPassword,
                    clientCode: clientCode,
                    userType: userType,
                    token: token
                })

                await newUser.save();

                return res.status(200).json({ message: 'Usuario creado correctamente', user: newUser});
            }
        }
        catch (error){
            res.status(500).json({ message: 'Error interno del servidor', error: error.message});
        }
    },

    loginUser: async (req , res) => {
        const { email, password } = req.body;

        try{
            let checkUser = await User.findOne( {email: email} );

            if(!checkUser){
                return res.status(400).json({message: 'Email o contraseña incorrecto.'});
            }

            let comparePassword = await bcrypt.compare(password , checkUser.password);

            if(!comparePassword){
                return res.status(400).json({message: 'Email o contraseña incorrecto.'})
            }

            let token = jwt.sign(
                {
                    email: checkUser.email,
                    userName: checkUser.userName,
                    userType: checkUser.userType
                },
                process.env.SECRET_KEY
            );

            checkUser.token = token;
            await checkUser.save();

            return res.status(200).json({message: 'Inicio de sesion correcto', token: token, user: checkUser});
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({message: 'Error en el servidor', error: error.message});
        }
    }
} 


export default userController;