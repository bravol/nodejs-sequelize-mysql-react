import { Request, Response } from "express";
import Blogs from "../models/Blog";

// Get all blogs
export const getBlogs = async (req: Request, res: Response) => {
  const blogs = await Blogs.findAll(); // Fetch all blogs from the database
  res.json(blogs);
};

// Get a single blog by ID
export const getBlogById = async (
  req: Request,
  res: Response
): Promise<void> => {
  const blog = await Blogs.findByPk(req.params.id);
  if (!blog) {
    res.status(404).json({ error: "Blog not found" });
    return;
  }
  res.json(blog); // Send the blog as JSON
};

// Create a new blog
export const createBlog = async (req: Request, res: Response) => {
  const { title, content } = req.body; // Extract title and content from request body
  const newBlog = await Blogs.create({ title, content, date: new Date() });
  res.status(201).json(newBlog);
};

// Update a blog
export const updateBlog = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { title, content } = req.body; // Extract title and content from request body
  const blog = await Blogs.findByPk(req.params.id);
  if (!blog) {
    res.status(404).json({ error: "Blog not found" });
    return;
  }
  await blog.update({ title, content }); // Update the blog
  res.json(blog);
};

// Delete a blog
export const deleteBlog = async (
  req: Request,
  res: Response
): Promise<void> => {
  const blog = await Blogs.findByPk(req.params.id);
  if (!blog) {
    res.status(404).json({ error: "Blog not found" });
    return;
  }
  await blog.destroy(); // Delete the blog
  res.status(204).send();
};
