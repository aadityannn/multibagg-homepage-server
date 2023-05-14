const mongoose = require("mongoose");

async function connectToDatabase() {
    await mongoose.connect(
        "mongodb+srv://admin-aaditya:test-123@cluster0.qobazez.mongodb.net/emailInfoDB"
    );
    console.log("Connected to MongoDB database");
}

module.exports = connectToDatabase;
