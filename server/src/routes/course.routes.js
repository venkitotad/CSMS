import { Router } from "express";
import { createCourse } from "../controllers/course.controller.js";
const courseRouter = Router();

courseRouter.post('/create-course', createCourse)

export default courseRouter;