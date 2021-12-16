require("dotenv").config();
require("./config/mongo");

// const mongoose = require("mongoose");
const express = require("express");
const session = require("express-session");
const path = require("path");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const logger = require("morgan");

// const indexRouter = require("./routes/index");
const brandRouter = require("./routes/brand.js")
const categoryRouter = require("./routes/category.js");


// const app = mongoose();
const app = express();

const corsOptions = {
  origin: [process.env.CLIENT_URL],
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public/build")));

// app.use('/', indexRouter);

app.use("/", brandRouter);
app.use("/", categoryRouter);



// // 404 Middleware

app.use("/api/*", (req, res, next) => {
  const error = new Error("Ressource not found.");
  error.status = 404;
  next(error);
});

if (process.env.NODE_ENV === "production") {
  app.use("*", (req, res, next) => {
    // If no routes match, send them the React HTML.
    res.sendFile(path.join(__dirname, "public/build/index.html"));
  });
  // header("Set-Cookie: cross-site-cookie=whatever; SameSite=None; Secure");
}

module.exports = app;









