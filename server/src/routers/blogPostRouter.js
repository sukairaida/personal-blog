import { Router } from "express";
import { getBlogPosts } from "../controllers/blogPostController.js";

const blogPostRouter = Router();

blogPostRouter.get("/", getBlogPosts);

export default blogPostRouter;
