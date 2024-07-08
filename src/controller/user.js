import { getAllUser } from "../model/user.js";

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
