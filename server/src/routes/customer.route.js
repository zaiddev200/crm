import { Router } from "express";
import { createCustomer, deleteCustomer, getCustomer, updateCustomer } from "../controllers/customer.controller.js";

const customer = Router() 

customer.post("/customer", createCustomer )
customer.get("/customer", getCustomer )
customer.put("/customer/:id", updateCustomer)
customer.delete("/customer/:id", deleteCustomer )

export default customer