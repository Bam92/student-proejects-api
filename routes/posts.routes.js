import { Router } from "express";
import PostController from "../controllers/PostController.js";

const router = Router();
const postCTRL = new PostController();

router
    .get("/", postCTRL.getAllPosts)
    .post("/", postCTRL.createPost)
    .get("/:id", postCTRL.getPost);

export default router;
