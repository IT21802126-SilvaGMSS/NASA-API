const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const dbConnect = require("./config/dbConnect");
const dotenv = require("dotenv").config();
const authRoutes = require("./routes/authRoutes");

dbConnect();


const app = express();

app.use(express.json());

app.use(cookieParser());

app.use("/api/auth", authRoutes);



const PORT = process.env.PORT || 8088;

app.listen(PORT, () => {
  console.log(`Server is running  at PORT ${PORT}`);
});
