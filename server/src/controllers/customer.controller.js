import { customer } from "../models/customer.model.js";

const getCustomer = async (req, res ) => {
    // console.log(req.headers)
    // res.cookie("access-token", "")
    try {
      const Customer = await customer.find();
      res.status(200).json({
        message: "Customer fetched successfully",
        data: Customer,
        
      });
    } catch (error) {
        console.log(error);
        
    }
  };
  
  const createCustomer = async (req, res ) => {
    try {
      const { type, name, country, phone, email } = req.body;
      const Customer = await customer.create({
        type,
        name,
        country,
        phone,
        email,
        
       
      });
      res.json(200).json({
        message: "Customer created successfully",
        data: Customer,
      });
    } catch (error) {
        console.log(error);
        
    }
  };
  
  const updateCustomer = async (req, res ) => {
    try {
      const { type, name, country,  phone, email, } = req.body;
      const customerId = req.params.id;
      const updatedCustomer = await customer.findByIdAndUpdate(
        { _id: customerId },
        {
            type,
            name,
            country,
            phone,
            email,
            
        
        },
        { new: true }
      );
      res.status(201).json({
        message: "Customer updated successfully",
        data: updatedCustomer,
      });
    } catch (error) {
        console.log(error);
        
    }
  };
  
  const deleteCustomer = async (req, res) => {
    try {
      const customerId = req.params.id;
      await customer.findByIdAndDelete(customerId);
      res.status(200).json({
        message: "customer deleted successfully",
      });
    } catch (error) {
        console.log(error);
        
    }
  };
  
  export { getCustomer, createCustomer, updateCustomer, deleteCustomer};