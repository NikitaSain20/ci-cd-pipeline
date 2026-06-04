import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;
const a;
app.get("/", (_req, res) => {
  res.send("Hello For CI/CD with GitHub Actions!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
