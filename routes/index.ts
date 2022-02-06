import { Router, Response, Request, NextFunction } from "express";
import messages from "../public/javascripts/messages";

let router = Router();

/* GET home page. */
router.get("/", function (req: Request, res: Response, next: NextFunction) {
  res.render("index", { title: "Little Board", messages: messages });
});

module.exports = router;
