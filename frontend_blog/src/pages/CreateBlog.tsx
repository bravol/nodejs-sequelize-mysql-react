import React, { useState } from "react";
import { Blog } from "../types";
import { createBlog } from "../service/api";

const CreateBlog = () => {
  const [formData, setFormData] = useState<
    Omit<Blog, "id" | "createdAt" | "updatedAt">
  >({
    title: "",
    content: "",
    date: "",
  });

  //   submit function
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...(formData as Blog), [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const blog = { ...formData, date: Date.now().toString() };
      const response = await createBlog(blog);
      if (response) {
        setFormData({ date: "", title: "", content: "" });
        alert("Blog added successfully!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Create Blog</h1>
      <form
        className="min-h-screen flex items-center justify-center"
        onSubmit={handleSubmit}
      >
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="title"
            required
          />
        </div>

        <div>
          <label>Content:</label>
          <textarea
            name="content"
            rows={8}
            placeholder="write blog content here"
            value={formData.content}
            onChange={handleChange}
          ></textarea>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default CreateBlog;
