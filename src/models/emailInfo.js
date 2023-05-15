const mongoose = require("mongoose");

const emailInfoSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date,
        default: () =>
            new Date().toLocaleString("en-US", {
                dateStyle: "full",
                timeStyle: "long",
            }),
    },
});

const EmailInfo = mongoose.model("EmailInfo", emailInfoSchema);

module.exports = EmailInfo;
