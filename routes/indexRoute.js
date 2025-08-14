import { Router } from "express";
import {
  sendData,
  postData,
  patchData,
  deleteUser,
  getSingleUser,
} from "../controller/indexController.js";

const router = Router();

// get request
router.get("/", sendData);

router.get("/:id", getSingleUser);

//  Post request
router.post("/", postData);

router.put("/", patchData);

router.delete("/:id", deleteUser);

// PUT, PATCH, DELETE

export default router;
