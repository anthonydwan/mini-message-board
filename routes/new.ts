import { Router, Response, Request, NextFunction } from "express";


let router = Router();

/* GET home page. */
router.get("/new", function (req: Request, res: Response, next: NextFunction) {
  res.render("form", { title: " });
});

module.exports = router;
