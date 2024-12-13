import express from "express";
import { getBook,postBook } from "../controller/book.controller.js";

const router = express.Router();

router.get("/", getBook);

router.post("/", postBook);

export default router;