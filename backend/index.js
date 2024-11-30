import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.get("/", (req, res) => {
  res.send("Testing");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
