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
router.get("/", function (req: Request, res: Response, next: NextFunction) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

module.exports = router;
