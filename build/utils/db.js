import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();
const { DBURI, } = process.env;
const sequelize = new Sequelize(DBURI);
export default sequelize;
