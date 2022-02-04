import { Router, Response, Request, NextFunction } from "express";

interface message {
  text: String;
  user: String;
  added: Date;
}

const messages: message[] = [
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

let router = Router();

/* GET home page. */
router.get("/new", function (req: Request, res: Response, next: NextFunction) {
  res.render("form");
});

router.post("/new", (req: Request, res: Response, next: NextFunction) => {
  const messageText: String = req.body.messageText;
  const messageUser: String = req.body.messageUser;
  messages.push({ text: messageText, user: messageUser, added: new Date() });
  res.redirect("/");
});

module.exports = router;
