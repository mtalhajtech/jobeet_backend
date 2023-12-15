import express from "express";
import {
  getActiveJobsByCategory,
  createJob,
} from "../controller/job.controller.js";
import upload from "../middlewares/imageuploader.js";
const router = express.Router();

router.get("/:categoryId", getActiveJobsByCategory);
router.post("/post", upload.single("file"), createJob);

export default router;
