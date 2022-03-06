import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => res.send("Server is Working...!"));
app.all("*", (req, res) => res.send("Route not found"));

app.listen(port, () => console.log(`Server is running on port ${port}`));
