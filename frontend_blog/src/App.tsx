import { useEffect, useState } from "react";
import Blogs from "./pages/Blogs";
import CreateBlog from "./pages/CreateBlog";
import { Blog } from "./types";
import { getBlogs } from "./service/api";

function App() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const getData = async () => {
      const storedBlogs: Blog[] = await getBlogs();
      setBlogs(storedBlogs);
    };
    getData();
  }, []);
  return (
    <>
      <CreateBlog />
      <hr />
      <Blogs blogs={blogs} />
      <hr />
    </>
  );
}

export default App;
