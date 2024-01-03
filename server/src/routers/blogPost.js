import { Router } from "express";
import {
  deleteBlogPost,
  getBlogPosts,
  postBlogPost,
} from "../controllers/blogPost.js";

const blogPostRouter = Router();

blogPostRouter.get("/", getBlogPosts);
blogPostRouter.post("/", postBlogPost);
blogPostRouter.delete("/:id", deleteBlogPost);

export default blogPostRouter;
