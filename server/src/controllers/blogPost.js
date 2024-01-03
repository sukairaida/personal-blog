import asyncHandler from "express-async-handler";
import BlogPostModel from "../models/BlogPost.js";
import { createStatusError } from "../utils/error.js";

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

export const patchBlogPost = asyncHandler(async (req, res, next) => {
  const { title, description, markdown, cover, date, category } = req.body;
  const { id } = req.params;
  const updated = await BlogPostModel.findByIdAndUpdate(
    id,
    { title, description, markdown, cover, date, category },
    {
      runValidators: true,
      new: true,
    },
  );
  res.status(200).json(updated);
});

export const getSinglePost = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const post = await BlogPostModel.findById(id);
  if (!post) {
    throw createStatusError(`Post with id ${id} not found`, 404);
  }
  res.status(200).json(post);
});
