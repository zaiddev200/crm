import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  total: {
    type: Number,
    required: true,
  },
});



const invoiceSchema = new mongoose.Schema(
  {
    client: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
      required: true,
      unique: true,
    },
    year: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      enum: ["USD", "EUR", "GBP", "PKR", ],
      required: true,
    },
    status: {
      type: String,
      enum: ["draft", "pending", "sent", ],
      default: "draft",
    },
    date: {
      type: Date,
      required: true,
    },
    expiredDate: {
      type: Date,
      required: true,
    },
    note: {
      type: String,
      default: "",
    },
    items: [itemSchema],
    subTotal: {
      type: Number,
      required: true,
      min: 0,
    },
    tax: {
      type: Number,
      required: true,
      min: 0,
    },
    total: {
      type: Number,
      required: true,
      min: 0,
    },
  
    paid:{
      type: Number,
      default: 0,
    },
    payment:{
      type: String,
      enum: ["paid", "unpaid", "partial"],
      default: "unpaid",
    }
  },
  { timestamps: true } 
);

// Create and export the model
export const Invoice = mongoose.model("Invoice", invoiceSchema);
