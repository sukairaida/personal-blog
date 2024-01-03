import { Router } from "express";
import { getBlogPosts, postBlogPost } from "../controllers/blogPost.js";

const blogPostRouter = Router();

blogPostRouter.get("/", getBlogPosts);
blogPostRouter.post("/", postBlogPost);

export default blogPostRouter;
