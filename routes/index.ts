import { Router, Response, Request, NextFunction } from "express";
import messages from "../public/javascripts/messages";

let router = Router();

/* GET home page. */
router.get("/", function (req: Request, res: Response, next: NextFunction) {
  res.render("index", {
    title: "Little Board",
    msg: messages,
    len: messages.length,
  });
});

module.exports = router;
