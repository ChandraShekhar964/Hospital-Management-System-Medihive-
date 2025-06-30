const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./db/conn");
const userRouter = require("./routes/userRoutes");
const doctorRouter = require("./routes/doctorRoutes");
const appointRouter = require("./routes/appointRoutes");
const path = require("path");
const notificationRouter = require("./routes/notificationRouter");
const connectDB  = require('./db/conn');

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.get("*", (req, res) => {
  // res.sendFile(path.join(__dirname, "./client/build/index.html"));
  res.send("Hello word");
});


app.use("/api/user", userRouter);
app.use("/api/doctor", doctorRouter);
app.use("/api/appointment", appointRouter);
app.use("/api/notification", notificationRouter);
app.use(express.static(path.join(__dirname, "./client/build")));


app.listen(port, async () => {
  try{
    await connectDB;
    console.log("Server running in port: " + port);
  }catch(err) {
    console.log(err);
  }
});
