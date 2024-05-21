import { Router } from "express";
import coursesModel from "../models/courses.model.js";

const coursesRouter = Router();

coursesRouter.post("/api/course", async (req, res) => {
  const { title, description, difficulty, topics, professor } = req.body;

  try {
    const newCourse = await coursesModel.create(req.body);

    res.status(200).json(newCourse);
  } catch (error) {
    console.error(error, "error");
  }
});





export default coursesRouter