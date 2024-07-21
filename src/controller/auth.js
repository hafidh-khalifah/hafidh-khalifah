import { getUser } from "../model/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const result = await getUser(username);
    if (result.length <= 0) {
      res.status(400).json({
        message: "bad request",
        data: "account not found",
      });
    } else {
      const user = result[0];
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        const payload = {
          userid: user.id,
        };
        const option = {
          expiresIn: "1d",
        };
        const token = jwt.sign(payload, process.env.JWT_KEY, option);
        res.cookie("token", token, {
          httpOnly: true,
        });
        res.status(200).json({
          message: "login succesfully",
          data: "",
        });
      } else {
        res.status(401).json({
          message: "Unauthorized",
          data: "You give a wrong password, try again.",
        });
      }
    }
  } catch (error) {
    console.log("internal server error on login", error);
  }
};

export const logout = (req, res) => {
  res.clearCookie("token");
  res.status(200).json({
    message: "logout successfully",
    data: "",
  });
};
