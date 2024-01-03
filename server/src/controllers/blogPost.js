import asyncHandler from "express-async-handler";
import BlogPostModel from "../models/BlogPost.js";

export const getBlogPosts = asyncHandler(async (req, res, next) => {
  const posts = await BlogPostModel.find({});
  res.status(200).json(posts);
});

export const postBlogPost = asyncHandler(async (req, res, next) => {
  const { title, description, markdown, cover, date, category } = req.body;
  const newPost = new BlogPostModel({
    title,
    description,
    markdown,
    cover,
    date,
    category,
  });
  const saved = await newPost.save();
  res.status(201).json(saved);
});

export const deleteBlogPost = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  await BlogPostModel.findByIdAndDelete(id);
  res.status(204).end();
});
