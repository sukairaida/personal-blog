import { Router } from "express";
import {
  deleteBlogPost,
  getBlogPosts,
  patchBlogPost,
  postBlogPost,
} from "../controllers/blogPost.js";

const blogPostRouter = Router();

blogPostRouter.get("/", getBlogPosts);
blogPostRouter.post("/", postBlogPost);
blogPostRouter.delete("/:id", deleteBlogPost);
blogPostRouter.patch("/:id", patchBlogPost);

export default blogPostRouter;
