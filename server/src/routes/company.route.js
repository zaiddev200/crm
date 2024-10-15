import { Router } from "express";
import { createCompany, deleteCompany, getCompany, getSingleCompany, updateCompany } from "../controllers/company.controller.js";

const company = Router() 

company.post("/company", createCompany )
company.get("/company", getCompany )
company.put("/company/:id", updateCompany )
company.delete("/company/:id", deleteCompany )
company.get("/singlecompany/:id", getSingleCompany )

export default company