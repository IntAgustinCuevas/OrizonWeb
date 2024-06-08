import mongoose from 'mongoose';

const userSchema = new mongoose.Schema ({
    nroCliente: {
        type: String,
        required: true,
        index: { unique:true }
    },
    userName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        index: { unique:true }
    },
    password: {
        type: String,
        required: true,
    },
    userType: {
        type: String,
        required: true,
    }
}, { timestamps:true } ).set('toJSON' , {
    
    transform: (document , object) => {
        delete object.password;
    }
});

const User = mongoose.model( 'User' , userSchema);
export default User;