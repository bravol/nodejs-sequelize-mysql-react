import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import blogRoutes from "./routes/blogRoutes";
import sequelize from "./config/database";
import seedBlogs from "./seeders/seedBlogs";

const app = express();
// middlewares
app.use(cors());
app.use(bodyParser.json());

// routes
app.use("/blogs", blogRoutes);

// Sync databse and seed data.
const startServer = async () => {
  try {
    await sequelize.sync({ force: true });
    await seedBlogs();
    console.log("Database synced and seeded");

    app.listen(5000, () => {
      console.log("Server running on port 5000");
    });
  } catch (error) {
    console.error("Unable to start the server:", error);
  }
};

startServer();
