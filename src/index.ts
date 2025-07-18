import express from "express";
import { PORT } from "./config";

const app = express();

app.use(express.json());

app.get("/ping", (_req, res) => {
  res.status(200).json({ message: "pong" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
