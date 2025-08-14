import { Router } from "express";
import {
  sendData,
  postData,
  patchData,
  deleteUser,
} from "../controller/indexController.js";

const router = Router();

// get request
router.get("/", sendData);

//  Post request
router.post("/", postData);

router.put("/", patchData);

router.delete("/:id", deleteUser);

// PUT, PATCH, DELETE

export default router;
