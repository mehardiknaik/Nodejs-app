// Import node module
import express from "express";
const router = express.Router();

// Arrow functions
router.get("/", (req, res) => {
  res.json("Working Fine");
});
router.post("/", (req, res) => {
  res.json(req.body);
});
// Exporting an object as the default import for this module
export default router;
