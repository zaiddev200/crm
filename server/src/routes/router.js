
import { Router } from "express";
import people from "./people.js";
import company from "./company.route.js";
import customer from "./customer.route.js";
import lead from "./lead.route.js";

const router = Router();

router.use("/form", people)
router.use("/companyform", company)
router.use("/customerform", customer)
router.use("/leadform", lead)

export default router;