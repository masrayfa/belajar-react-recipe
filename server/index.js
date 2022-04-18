const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const dotenv = require("dotenv");

const authRoute = require("./routes/auth.js");
const postRoute = require("./routes/posts.js");
const userRoute = require("./routes/users.js");

dotenv.config();

// Setup express
const app = express();

// Setup mongodb using mongoose
mongoose.connect(
  process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Connected to MongoDB");
  }
);

// Middleware
app.use(express.json());
app.use(helmet());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);

app.listen(7000, () => {
  console.log("Server is up and running...");
});
