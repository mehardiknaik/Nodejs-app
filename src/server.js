// Importing node modules
import express from "express";
import cors from 'cors';
// Importing source files
import routes from "./routes/main.routes";
// consts
const app = express();
app.use(cors());
app.use(
  express.json({
    type: "*/*",
  })
);

app.use("/", routes);

// arrow functions
const server = app.listen(5000, () => {
  // destructuring
  const { address, port } = server.address();

  // string interpolation:
  console.log(`Example app listening at http://${address}:${port}`);
});

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
