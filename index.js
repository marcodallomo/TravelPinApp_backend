const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const userRoute = require("./routes/users");
const pinRoute = require("./routes/pins");
const cors = require("cors");
dotenv.config();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/users", userRoute);
app.use("/api/pins", pinRoute);

app.listen(process.env.PORT || 8800, () => {
  console.log("backend server is running");
});
