import { Router } from "express";
import { createCategory } from "../controllers/category.controller.js";
const categoryRouter = Router();

categoryRouter.post('/create-category', createCategory);

export default categoryRouter;