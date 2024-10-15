import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    // enum: ['people', 'company'],
    // default: 'people',
  },
  name: {
    type: String,
    required: true,
    trim: true,
},

country: {
    type: String,
    // required: true,
    trim: true,
},
phone: {
    type: Number,
    // required: true,
},
email: {
    type: String,
    // required: true,
    unique: true,
    trim: true,
    lowercase: true,
    validate: {
        validator: function (v) {
            // Basic email validation regex
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
        },
        message: (props) => `${props.value} is not a valid email!`,
    },
},
 

}, { timestamps: true }); // Fixing the 'timestamps' setting

export const customer = mongoose.model('Customer', customerSchema);
