
import { Router } from "express";
import people from "./people.js";
import company from "./company.route.js";

const router = Router();

router.use("/form", people)
router.use("/companyform", company)

export default router;