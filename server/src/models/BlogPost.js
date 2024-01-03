import { Schema, model } from "mongoose";

const BlogPostSchema = new Schema({
  title: { type: String, required: true },
  category: {
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

BlogPostSchema.virtual("UTCDateValues").get(function () {
  const values = {};
  const date = new Date(this.date);
  values.day = date.getUTCDay();
  values.month = date.getUTCMonth();
  values.year = date.getUTCFullYear();
  return values;
});

BlogPostSchema.set("toJSON", { virtuals: true });

const BlogPostModel = model("blogpost", BlogPostSchema);

export default BlogPostModel;
