import express from "express";
import { allUser } from "../controller/user.js";
import { auth } from "../middlewere/auth.js";
export const router = express.Router();

router.use(auth);
router.get("/", allUser);
