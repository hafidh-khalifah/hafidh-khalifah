import express from "express";
import bodyParser from "body-parser";
import { router as users } from "./routes/user.js";
const app = express();

//middlewere
app.use(bodyParser.json());

//routes
app.get("/", (req, res) => {
  res.status(200).json({
    message: "API ready to go",
  });
});

app.use("/users", users);

app.listen(process.env.PORT, () => {
  console.log(`server listening on port ${process.env.PORT}`);
});
