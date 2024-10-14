import mongoose from "mongoose";

const leadSchema = mongoose.Schema({
    branch:{
        type: String,
        enum: ['main'],
        default: 'main',
        required: true
    },
    type:{
        type: String,
        required: true,
        enum: ['people', 'company'],
    default: 'people',
    },
    name:{
        type: String,
        required: true
    },
   
    status:{
        type: String,
        enum: ['draft', 'new', 'innegociation', 'won', 'losse', 'canceled', 'assigned','onhold'  ],
        default: 'draft'
    },
    source:{
        type: String,
        enum:['linkedin', 'socialmedia','website', 'advertising', 'friend', 'professionalnetwork', 'customerreferral', 'sales', 'other' ]
    },
    country:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
},{timeStamp: true});

export const lead = mongoose.model('lead', leadSchema);