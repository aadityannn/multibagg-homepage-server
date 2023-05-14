const express = require("express");
const asyncHandler = require("express-async-handler");
const EmailInfo = require("../models/emailInfo");

const router = express.Router();

router.get(
    "/",
    asyncHandler(async function (req, res) {
        const emailInfo = await EmailInfo.find();
        res.json(emailInfo);
    })
);

router.post(
    "/",
    asyncHandler(async function (req, res) {
        const email = new EmailInfo({
            email: req.body.email,
        });
        await email.save();
        const emailInfo = await EmailInfo.find();
        res.json(emailInfo);
    })
);

module.exports = router;
