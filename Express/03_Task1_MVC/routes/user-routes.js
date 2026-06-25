import { Router } from "express";
import {
  getHtmlpage,
  handleSubmit,
  getalluser,
} from "../controller/user-controller";

const router = Router();

router.get("/", getHtmlpage);
router.post("/submit", handleSubmit);
router.get("/users", getalluser);

export default router;
