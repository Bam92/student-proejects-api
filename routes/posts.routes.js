import { Router } from "express";
import PostController from "../controllers/PostController.js";

const router = Router();
const postCTRL = new PostController();

router.get("/", postCTRL.getAllPosts);

export default router;
