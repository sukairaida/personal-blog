import { Schema, model } from "mongoose";

const BlogPostSchema = new Schema({
  title: { type: String, required: true },
  categories: {
    type: [String],
    required: true,
    validate: [
      (val) => val.length > 0,
      "The blog must have at least one category",
    ],
  },
  date: { type: Date, default: Date.now },
  description: { type: String, required: true },
  cover: { type: String, required: true },
  markdown: { type: String, required: true },
});

const BlogPostModel = model("blogpost", BlogPostSchema);

export default BlogPostModel;
