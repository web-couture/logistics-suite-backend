import {
  InferCreationAttributes,
  DataTypes,
  InferAttributes,
  CreationOptional,
  Model,
  NonAttribute,
  ForeignKey,
} from "sequelize";
import sequelize from "../utils/db";
import Address from "./address";
import Vendor from "./vendor";

class Station extends Model<
  InferAttributes<Station, { omit: "address" | "vendor" }>,
  InferCreationAttributes<Station>
> {
  declare id: CreationOptional<string>;
  declare name: string;
  declare code: string;
  declare addressId?: ForeignKey<Address["id"]>;
  declare address?: NonAttribute<Address>;
  declare phoneNumbers: string[];
  declare vendorId?: ForeignKey<Vendor["id"]>;
  declare vendor?: NonAttribute<Vendor>;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

Station.init(
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
    code: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    phoneNumbers: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  { sequelize }
);

export default Station;
