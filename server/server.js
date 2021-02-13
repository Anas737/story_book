const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const mongoose = require("mongoose");

const db = require("./db");
const passportConfig = require("./passport-config");

// load config
dotenv.config({
  path: "./config.env",
});

// env variables
const NODE_ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// connect to db
db.connect(MONGO_URI);

// create express app
const app = express();

// body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// cors
app.use(cors());

// express session
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);

// passport
passportConfig.configure();
app.use(passport.initialize());
app.use(passport.session());

// development mode middlewares
if (NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// routes
app.use("/api", require("./routes"));

app.listen(PORT, () =>
  console.log(`Server running in ${NODE_ENV} mode on port ${PORT}`)
);
