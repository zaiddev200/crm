
import { Router } from "express";
import people from "./people.js";

const router = Router();

router.use("/form", people)

export default router;