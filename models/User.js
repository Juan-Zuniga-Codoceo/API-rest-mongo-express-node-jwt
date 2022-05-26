import mongoose from "mongoose";
const {Schema,model} from "mongoose";

const schema = new Schema({
    email:{
        type: 'string',
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
        index: { unique: true },
    },
    password{
        type: 'string',
        required: true,
    },
})

export const User = model('user',userSchema)