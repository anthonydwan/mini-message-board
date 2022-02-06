"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const messages_1 = __importDefault(require("../public/javascripts/messages"));
let router = (0, express_1.Router)();
/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("form");
});
router.post("/", (req, res, next) => {
    const messageText = req.body.messageText;
    const messageUser = req.body.messageUser;
    messages_1.default.push({ text: messageText, user: messageUser, added: new Date() });
    res.redirect("/");
});
module.exports = router;
