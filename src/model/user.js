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

export const getUser = async (username) => {
  try {
    const [result] = await pool.query(`SELECT * FROM user WHERE username = ?`, [
      username,
    ]);
    return result;
  } catch (err) {
    console.log(`error in getUser`, err);
    throw err;
  }
};

export const insertUser = async (username, password) => {
  try {
    const [fields] = await pool.query(
      `INSERT INTO user (username, password) VALUES (?, ?)`,
      [username, password]
    );
    return fields;
  } catch (err) {
    console.log(`error in insertUser`, err);
    throw err;
  }
};
