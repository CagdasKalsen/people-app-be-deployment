///////////////////////////////
// DEPENDENCIES
////////////////////////////////
// require("dotenv").config;
// pull PORT from .env, give default value of 4000
const mongoose = require("mongoose");
const { MONGODB_URI } = process.env;
///////////////////////////////
// DATABASE CONNECTION
////////////////////////////////
mongoose.set("strictQuery", true);
mongoose.connect(
    "mongodb+srv://cagdaskalsen:Comar.2018@cluster0.mozlr3j.mongodb.net/?retryWrites=true&w=majority"
);

// Connection Events
mongoose.connection
    .on("open", () => console.log("You are connected to mongoose"))
    .on("close", () => console.log("You are disconnected from mongoose"))
    .on("error", (error) => console.log(error));