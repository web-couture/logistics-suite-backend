import {
  DataTypes,
  InferAttributes,
  CreationOptional,
  Model,
  ForeignKey,
  InferCreationAttributes,
} from "sequelize";
import sequelize from "../utils/db";
import Vendor from "./vendor";

class Config extends Model<
  InferAttributes<Config>,
  InferCreationAttributes<Config>
> {
  declare id: CreationOptional<string>;
  declare vat: number;
  declare insuranceFactor: number;
  declare ecommerceFactor: number;
  declare expressMultiplication: number;
  declare distanceFactor: number;
  declare distanceThreshold: number;
  declare vendorId?: ForeignKey<Vendor["id"]>;

  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

Config.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    vat: {
      type: DataTypes.FLOAT,
      defaultValue: 0.075,
    },
    insuranceFactor: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    ecommerceFactor: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    expressMultiplication: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    distanceFactor: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    distanceThreshold: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },

    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },

  { sequelize }
);

export default Config;
