import { Invoice } from "../models/invoices.model.js";

// GET all invoices
const getInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.find();
    res.status(200).json({
      message: "Invoices fetched successfully",
      data: invoices,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching invoices" });
  }
};

// CREATE a new invoice
const createInvoice = async (req, res) => {
  try {
    const {
      client,
      number,
      year,
      currency,
      status,
      date,
      expiredDate,
      note,
      items,
      subTotal,
      tax,
      total,
      paid,
      payment
      
    } = req.body;

    const invoice = await Invoice.create({
      client,
      number,
      year,
      currency,
      status,
      date,
      expiredDate,
      note,
      items,
      subTotal,
      tax,
      total,
      paid,
      payment
      
    });

    res.status(201).json({
      message: "Invoice created successfully",
      data: invoice,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating invoice" });
  }
};

// UPDATE an existing invoice
const updateInvoice = async (req, res) => {
  try {
    const invoiceId = req.params.id;
    const {
      client,
      number,
      year,
      currency,
      status,
      date,
      expiredDate,
      note,
      items,
      subTotal,
      tax,
      total,
      paid,
      payment
      
    } = req.body;

    const updatedInvoice = await Invoice.findByIdAndUpdate(
      { _id: invoiceId },
      {
        client,
        number,
        year,
        currency,
        status,
        date,
        expiredDate,
        note,
        items,
        subTotal,
        tax,
        total,
        paid,
        payment
        
      },
      { new: true }
    );

    res.status(200).json({
      message: "Invoice updated successfully",
      data: updatedInvoice,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating invoice" });
  }
};

// GET a single invoice by ID
const getSingleInvoice = async (req, res) => {
  try {
    const invoice = await Invoice.findById(req.params.id);
    if (!invoice) {
      return res.status(404).json({ message: "Invoice not found" });
    }
    res.status(200).json(invoice);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching invoice" });
  }
};

// DELETE an invoice by ID
const deleteInvoice = async (req, res) => {
  try {
    const invoiceId = req.params.id;
    await Invoice.findByIdAndDelete(invoiceId);
    res.status(200).json({
      message: "Invoice deleted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting invoice" });
  }
};

export {
  getInvoices,
  createInvoice,
  updateInvoice,
  getSingleInvoice,
  deleteInvoice,
};
