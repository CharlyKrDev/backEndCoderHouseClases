import { Router } from "express";
import userModel from "../models/user.model.js"; // <-- Import modelo de usuario

const router = Router();

router.get("/", async (req, res) => {
  try {
    let users = await userModel.find();
    res.send({ result: "success", payload: users });
  } catch (error) {
    console.error(error, `error`);
  }
});

router.post("/", async (req, res) => {
  let { nombre, apellido, email } = req.body;

  try {
    if (!nombre || !apellido || !email) {
      res.send({ status: "error", error: "falta parámetros" });
    }
    let result = await userModel.create({ nombre, apellido, email });
    res.send({ result: "success", payload: result });
  } catch (error) {
    console.error(error, `error`);
  }
});

router.put("/:uid", async (req, res) => {
  let { uid } = req.params;

  try {
    let userToReplace = req.body;

    if (
      !userToReplace.nombre ||
      !userToReplace.apellido ||
      !userToReplace.email
    ) {
      res.send({ status: "error", error: "falta parámetros" });
    }
    let result = await userModel.updateOne({ _id: uid }, userToReplace);
    res.send({ result: "success", payload: result });
  } catch (error) {
    console.error(error, `error`);
  }
});
router.delete("/:uid", async (req, res) => {

    let { uid } = req.params
  try {

    let deleteUser = await userModel.deleteOne({_id:uid})
    res.send({ result: "success", payload: deleteUser });
    
  } catch (error) {

    console.error(error, `error`);

  }
});
export default router;
