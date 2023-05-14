const mongoose = require("mongoose");

const emailInfoSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
});

const EmailInfo = mongoose.model("EmailInfo", emailInfoSchema);

module.exports = EmailInfo;
