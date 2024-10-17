import { Router } from "express";
import { createInvoice, deleteInvoice, getInvoices, getSingleInvoice, updateInvoice } from "../controllers/invoices.controller.js";


const invoices = Router();

invoices.post("/invoices", createInvoice);      // Create a new invoice
invoices.get("/invoices", getInvoices);         // Get all invoices
invoices.put("/invoices/:id", updateInvoice);   // Update an invoice by ID
invoices.get("/invoices/:id", getSingleInvoice); // Get a single invoice by ID
invoices.delete("/invoices/:id", deleteInvoice); // Delete an invoice by ID

export default invoices;
