import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const blogSchema = new Schema({
  title: String,
  author: String,
  content: String,
  createdAt: Date,
  updatedAt: Date,
});

const Blog = model('Blog', blogSchema);
export default Blog;