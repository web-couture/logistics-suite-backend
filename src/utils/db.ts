import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();
const {
  DBURI,
}: {
  DBURI: string;
} = process.env as any;
const sequelize = new Sequelize(DBURI);

export default sequelize;

