import React, { useState } from "react";
import { Blog } from "../types";

const CreateBlog = () => {
  const [formData, setFormData] = useState<Blog>({
    date: "",
    title: "",
    content: "",
  });
  //   submit function
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...(formData as Blog), [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // localstorage
    try {
      const existingBlogs = JSON.parse(localStorage.getItem("blogs") || "[]");
      const blog = { ...formData, date: Date.now().toString() };
      const updatedBlogs = [...existingBlogs, blog];
      localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
      setFormData({ date: "", title: "", content: "" });
      alert("Blog added successfully!");
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
