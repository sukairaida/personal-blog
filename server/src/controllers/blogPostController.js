import asyncHandler from "express-async-handler";
import BlogPostModel from "../models/BlogPost.js";

export const getBlogPosts = asyncHandler(async (req, res, next) => {
  const posts = await BlogPostModel.find({});
  res.status(200).json(posts);
});
