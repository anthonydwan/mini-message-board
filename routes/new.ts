import { Router, Response, Request, NextFunction } from "express";
import messages from "../public/javascripts/messages";

let router = Router();

/* GET home page. */
router.get("/", function (req: Request, res: Response, next: NextFunction) {
  res.render("form");
});

router.post("/", (req: Request, res: Response, next: NextFunction) => {
  const messageText: String = req.body.messageText;
  const messageUser: String = req.body.messageUser;
  messages.push({ text: messageText, user: messageUser, added: new Date() });
  res.redirect("/");
});

module.exports = router;
