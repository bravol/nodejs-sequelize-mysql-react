import { useEffect, useState } from "react";
import { Blog } from "../types";

const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const storedBlogs: Blog[] = JSON.parse(
      localStorage.getItem("blogs") || "[]"
    );
    setBlogs(storedBlogs);
  }, []);
  return (
    <div>
      <h1>Blogs</h1>
      {blogs.map((blog) => (
        <div key={blog.date} className="my-10">
          <span className="flex">
            <h3>{blog.title}</h3>
            <p>Posted on: {new Date(parseInt(blog.date)).toLocaleString()}</p>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
