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
    res.render("index", {
        title: "Little Board",
        msg: messages_1.default,
        len: messages_1.default.length,
    });
});
module.exports = router;
