const express = require("express");
const app = express();
//app dependencies
const cors = require("cors");
const morgan = require("morgan");

//controller import

const peopleController = require("./controllers/people-controller");
require("dotenv").config();
const { PORT } = process.env;
require("./config/db.connection"); // node runs all of the code in db.connection

app.use(express.json());
// express / app middleware
// cors helper function
app.use(cors());
// morgan request logger for dev
app.use(morgan("dev"));
// router middleware
app.use("/people", peopleController);

// Route - home / index for api -redirects to the people index route
app.get("/", (req, res) => {
    res.redirect("/people");
});

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});