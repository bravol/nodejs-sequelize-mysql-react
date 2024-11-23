import Blogs from "../models/Blog";

const seedBlogs = async () => {
  await Blogs.bulkCreate([
    { title: "First Blog", content: "This is my first blog", date: new Date() },
    {
      title: "second Blog",
      content: "This is my second blog",
      date: new Date(),
    },
  ]);
};

export default seedBlogs;
