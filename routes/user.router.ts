import express from "express";
import { createUser, viewUsers } from "../controller/user.controller";
const router = express.Router();

router.post("/crea", createUser);
router.post("/", viewUsers);

export default router;
