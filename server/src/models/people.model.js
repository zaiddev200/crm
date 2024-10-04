import mongoose from "mongoose";

const peopleSchema = mongoose.Schema({
    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    company:{
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
        type: Number,
        required: true,
        unique: true
    }
},{timeStamp: true});

export const people = mongoose.model('people', peopleSchema);