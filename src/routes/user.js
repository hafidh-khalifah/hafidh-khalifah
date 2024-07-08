import express from "express";
import { allUser } from "../controller/user.js";

export const router = express.Router();

router.get("/", allUser);
