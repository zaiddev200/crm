import { Router } from "express";
import { createPeople, deletePeople, getPeople, getSinglePeople, updatePeople } from "../controllers/people.controller.js";

const people = Router() 

people.post("/people", createPeople )
people.get("/people", getPeople )
people.put("/people/:id", updatePeople )
people.delete("/people/:id", deletePeople )
people.get("/singlepeople/:id", getSinglePeople )

export default people