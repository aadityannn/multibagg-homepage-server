const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connectToDatabase = require("./database");
const emailInfoRoutes = require("./routes/emailInfoRoutes");

const app = express();
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectToDatabase();

app.use("/", emailInfoRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
