// Importing node modules
import express from "express";
import cors from 'cors';
// Importing source files
import routes from "./routes/main.routes";
//Importing dotenv
import dotenv from "dotenv"
// consts
const app = express();
dotenv.config()
const port = process.env.PORT || 5000;
app.use(cors());
app.use(
  express.json({
    type: "*/*",
  })
);

app.use("/", routes);

app.listen(port, () => console.log(`Server is running on port ${port}`));

//error Handler
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});
