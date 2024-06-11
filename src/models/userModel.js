import mongoose from 'mongoose';

const userModel = new mongoose.Schema ({

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

const User = mongoose.model( 'User' , userModel);
export default User;