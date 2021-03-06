const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", () => console.error.bind(console, "connection error Mongodb"));
db.once("open", () => console.log("MongoDB is connected!"));

module.exports = db;
