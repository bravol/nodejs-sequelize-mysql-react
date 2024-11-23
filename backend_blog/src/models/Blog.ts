import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

class Blogs extends Model {
  public id!: number;
  public title!: string;
  public content!: string;
  public date!: Date;
}

Blogs.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "blogs",
  }
);

export default Blogs;
