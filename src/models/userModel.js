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
        required: true
    },
    clientCode: {
        type: String,
        required: true,
        index: { unique:true }
    },
    userType: {
        type: String,
        required: true,
        enum: ['admin' , 'userP1' , 'userP2']
    },
    token: {
        type: String,
        required: true,
        index: { unique:true }
    }
}, { timestamps:true } ).set('toJSON' , {
    
    transform: (document , object) => {
        delete object.password;
    }
});

const User = mongoose.model( 'User' , userModel);
export default User;