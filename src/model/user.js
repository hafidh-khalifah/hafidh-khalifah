import { pool } from "../config/database.js";

export const getAllUser = async () => {
  try {
    const [result] = await pool.query(`SELECT * FROM user`);
    return result;
  } catch (error) {
    console.log(`error in getAllUser`, error);
    throw error;
  }
};
