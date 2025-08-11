import { Router } from "express";
import { sendData, postData } from "../controller/indexController.js";

const router = Router();

// get request
router.get("/", sendData);

//  Post request
router.post("/", postData);

// PUT, PATCH, DELETE

export default router;
