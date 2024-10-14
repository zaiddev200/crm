import { Router } from "express";
import { createLead, deleteLead, getLead, updateLead } from "../controllers/lead.controller.js";

const lead = Router() 

lead.post("/lead", createLead )
lead.get("/lead", getLead )
lead.put("/lead/:id", updateLead)
lead.delete("/lead/:id", deleteLead)

export default lead