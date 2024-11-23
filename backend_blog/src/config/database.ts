import { Sequelize } from "sequelize";

const sequelize = new Sequelize("blogdb", "root", "12345678", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
});

export default sequelize;
