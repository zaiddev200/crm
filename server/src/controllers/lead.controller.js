import { lead } from "../models/lead.model.js";

const getLead = async (req, res) => {
  try {
    const Lead = await lead.find();
    res.status(200).json({
      message: "Lead fetched successfully",
      data: Lead,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to fetch leads" });
  }
};

const createLead = async (req, res) => {
  try {
    const { branch, type, name, status, source, country, phone, email } = req.body;
    const Lead = await lead.create({
      branch,
      type,
      name,
      status,
      source,
      country,
      phone,
      email,
    });
    res.status(200).json({
      message: "Lead created successfully",
      data: Lead,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to create lead" });
  }
};

const updateLead = async (req, res) => {
  try {
    const { branch, type, name, status, source, country, phone, email } = req.body;
    const LeadId = req.params.id;
    const updatedLead = await lead.findByIdAndUpdate(
      { _id: LeadId },
      {
        branch,
        type,
        name,
        status,
        source,
        country,
        phone,
        email,
      },
      { new: true }
    );
    if (!updatedLead) {
      return res.status(404).json({ message: "Lead not found" });
    }
    res.status(200).json({
      message: "Lead updated successfully",
      data: updatedLead,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to update lead" });
  }
};

const getSingleLead = async (req, res) => {
  try {
    const result = await lead.findById(req.params.id);
    if (!result) {
      return res.status(404).json({ message: "Lead not found" });
    }
    res.status(200).json({
      message: "Lead fetched successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to fetch lead" });
  }
};

const deleteLead = async (req, res) => {
  try {
    const leadId = req.params.id;
    const deletedLead = await lead.findByIdAndDelete(leadId);
    if (!deletedLead) {
      return res.status(404).json({ message: "Lead not found" });
    }
    res.status(200).json({
      message: "Lead deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to delete lead" });
  }
};

export { getLead, createLead, updateLead, getSingleLead, deleteLead };
