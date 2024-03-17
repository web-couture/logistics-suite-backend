import {
  DataTypes,
  InferAttributes,
  CreationOptional,
  Model,
  ForeignKey,
  InferCreationAttributes,
} from "sequelize";
import sequelize from "../utils/db";
import State from "./states";

class City extends Model<InferAttributes<City>, InferCreationAttributes<City>> {
  declare id: CreationOptional<string>;
  declare name: string;
  declare latitude: number;
  declare longitude: number;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
  declare stateId: ForeignKey<State["id"]>;
}

City.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    latitude: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    longitude: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },

  { sequelize }
);

export default City;
