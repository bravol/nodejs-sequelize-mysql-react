import axios, { AxiosResponse } from "axios";
import { Blog } from "../types";
import { API_URL } from "../env";

// Get all blogs
export const getBlogs = async (): Promise<Blog[]> => {
  try {
    const response: AxiosResponse<Blog[]> = await axios.get(`${API_URL}/blogs`);
    return response.data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw error;
  }
};

// Create a  blog
export const createBlog = async (
  blogData: Omit<Blog, "id" | "createdAt" | "updatedAt">
): Promise<Blog> => {
  try {
    const response: AxiosResponse<Blog> = await axios.post(
      `${API_URL}/blogs`,
      blogData
    );
    return response.data;
  } catch (error) {
    console.error("Error creating blog:", error);
    throw error;
  }
};

// Update blog
export const updateBlog = async (
  id: number,
  blogData: Omit<Blog, "id" | "createdAt" | "updatedAt">
): Promise<Blog> => {
  try {
    const response: AxiosResponse<Blog> = await axios.put(
      `${API_URL}/blogs/${id}`,
      blogData
    );
    return response.data;
  } catch (error) {
    console.error("Error updating blog:", error);
    throw error;
  }
};

// Delete a blog
export const deleteBlog = async (id: number): Promise<void> => {
  try {
    await axios.delete(`${API_URL}/blogs/${id}`);
  } catch (error) {
    console.error("Error deleting blog:", error);
    throw error;
  }
};
