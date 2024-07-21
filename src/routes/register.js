import { register } from "../controller/user.js";
import express from "express";
export const router = express.Router();

router.post("/", register);
