import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { router as users } from "./routes/user.js";
import { router as auth } from "./routes/auth.js";
import { router as register } from "./routes/register.js";
const app = express();

//middlewere
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: true,
  })
);

//routes
app.use("/register", register);
app.get("/", (req, res) => {
  res.status(200).json({
    message: "API ready to go",
  });
});

app.use("/auth", auth);
app.use("/users", users);

app.listen(process.env.PORT, () => {
  console.log(`server listening on port ${process.env.PORT}`);
});
