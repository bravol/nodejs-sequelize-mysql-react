import { Request, Response } from "express";
import Blogs from "../models/Blog";

// Get all blogs
export const getBlogs = async (req: Request, res: Response) => {
  const blogs = await Blogs.findAll(); // Fetch all blogs from the database
  res.json(blogs); // Send the blogs as JSON
};

// Get a single blog by ID
export const getBlogById = async (
  req: Request,
  res: Response
): Promise<void> => {
  const blog = await Blogs.findByPk(req.params.id); // Find blog by primary key
  if (!blog) {
    res.status(404).json({ error: "Blog not found" }); // If not found, return 404
    return;
  }
  res.json(blog); // Send the blog as JSON
};

// Create a new blog
export const createBlog = async (req: Request, res: Response) => {
  const { title, content } = req.body; // Extract title and content from request body
  const newBlog = await Blogs.create({ title, content, date: new Date() }); // Create a new blog entry
  res.status(201).json(newBlog); // Respond with the created blog and a 201 status
};

// Update a blog
export const updateBlog = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { title, content } = req.body; // Extract title and content from request body
  const blog = await Blogs.findByPk(req.params.id); // Find the blog by primary key
  if (!blog) {
    res.status(404).json({ error: "Blog not found" }); // If not found, return 404
    return;
  }
  await blog.update({ title, content }); // Update the blog
  res.json(blog); // Respond with the updated blog
};

// Delete a blog
export const deleteBlog = async (
  req: Request,
  res: Response
): Promise<void> => {
  const blog = await Blogs.findByPk(req.params.id); // Find the blog by primary key
  if (!blog) {
    res.status(404).json({ error: "Blog not found" }); // If not found, return 404
    return;
  }
  await blog.destroy(); // Delete the blog
  res.status(204).send(); // Respond with 204 (No Content)
};
