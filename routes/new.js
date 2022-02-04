"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date(),
    },
    {
        text: "Hi there!",
        user: "Charles",
        added: new Date(),
    },
];
let router = (0, express_1.Router)();
/* GET home page. */
router.get("/new", function (req, res, next) {
    res.render("form");
});
router.post("/new", (req, res, next) => {
    const messageText = req.body.messageText;
    const messageUser = req.body.messageUser;
    messages.push({ text: messageText, user: messageUser, added: new Date() });
    res.redirect("/");
});
module.exports = router;
