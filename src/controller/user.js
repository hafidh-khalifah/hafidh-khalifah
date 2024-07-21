import { getAllUser, getUser, insertUser } from "../model/user.js";
import bcrypt from "bcryptjs";

export const allUser = async (req, res) => {
  try {
    const result = await getAllUser();
    res.status(200).json({
      messeage: "get all users succesfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      messeage: "Internal server errror",
      data: err,
    });
  }
};

export const register = async (req, res) => {
  const { username, password } = req.body;
  try {
    const results = await getUser(username);
    if (results.length > 0) {
      res.status(400).json({
        message: "bad request",
        data: "account has already added",
      });
    } else {
      const hashed_password = await bcrypt.hash(password, 10);
      const fields = await insertUser(username, hashed_password);
      res.status(200).json({
        message: "account has been added succesfully",
        data: {
          isSuccess: fields.affectedRows,
          id: fields.insertId,
        },
      });
    }
  } catch (err) {
    console.log("error in register", err);
    throw err;
  }
};
