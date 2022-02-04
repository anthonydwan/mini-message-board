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
        text: "Hello!",
        user: "Charles",
        added: new Date(),
    },
];
let router = (0, express_1.Router)();
/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", { title: "Mini Messageboard", messages: messages });
});
// router.get("/new", function (req: Request, res: Response, next: NextFunction) {
//   res.render("form");
// });
// router.post("/new", (req: Request, res: Response, next: NextFunction) => {
//   const messageText: String = req.body.messageText;
//   const messageUser: String = req.body.messageUser;
//   messages.push({ text: messageText, user: messageUser, added: new Date() });
//   res.redirect("/");
// });
module.exports = router;
