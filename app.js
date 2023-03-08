import express from "express";
import usersRouter from "./routes/users-route.js";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use("/api/v1/users", usersRouter);

app.get("/api/v1/", (req, res) => {
  res.status(200).send(`<p>Welcome to <strong>Application</strong></p>`);
});

app.listen(port, () =>
  console.log(`connect to server at http://localhost:${port}`)
);
