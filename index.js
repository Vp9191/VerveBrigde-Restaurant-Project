import express from "express";
const app = express();
import cors from "cors";
const port = process.env.PORT || 6001;

// middleware
app.use(cors());
app.use(express.json());

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
