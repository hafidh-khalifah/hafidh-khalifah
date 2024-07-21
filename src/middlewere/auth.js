import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
  const token = req.cookies["token"];
  if (!token) {
    res.status(401).json({
      messege: "unauthorized",
      data: "you have to login first",
    });
  } else {
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    req.userId = decoded.userid;
    next();
  }
};
