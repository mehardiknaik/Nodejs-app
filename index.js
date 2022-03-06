import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => console.log(`Server is running on port ${port}`));

app.get("/", (req, res) => res.send("Server is Working...!"));
app.post("/", (req, res) => res.send(req.body));
app.all("*", (req, res) => res.send("Route not found"));
