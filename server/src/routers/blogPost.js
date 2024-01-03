import { Router } from "express";
import {
  deleteBlogPost,
  getBlogPosts,
  getSinglePost,
  patchBlogPost,
  postBlogPost,
} from "../controllers/blogPost.js";

const blogPostRouter = Router();

blogPostRouter.get("/", getBlogPosts);
blogPostRouter.get("/:id", getSinglePost);
blogPostRouter.post("/", postBlogPost);
blogPostRouter.delete("/:id", deleteBlogPost);
blogPostRouter.patch("/:id", patchBlogPost);

export default blogPostRouter;
