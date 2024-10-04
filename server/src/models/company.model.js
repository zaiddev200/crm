import mongoose from "mongoose";

const companySchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    contact:{
        type: String,
        required: true
    },
   
    country:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    phone:{
        type: String,
        required: true,
        unique: true
    },
    website:{
        type: String,
    }
},{timeStamp: true});

export const company = mongoose.model('company', companySchema);