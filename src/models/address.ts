import {
  DataTypes,
  InferAttributes,
  CreationOptional,
  Model,
  ForeignKey,
  InferCreationAttributes,
  NonAttribute,
  HasOneCreateAssociationMixin,
  BelongsToGetAssociationMixin,
  BelongsToSetAssociationMixin,
  BelongsToCreateAssociationMixin,
} from "sequelize";
import sequelize from "../utils/db";
import Country from "./countries";
import State from "./states";
import City from "./cities";
import { PassThrough } from "stream";

class Address extends Model<
  InferAttributes<Address, { omit: "city" | "state" }>,
  InferCreationAttributes<Address>
> {
  declare id: CreationOptional<string>;
  declare streetAddress: string;
  declare stateId: ForeignKey<State["id"]>;
  declare cityId?: ForeignKey<City["id"]>;

  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;

  declare city?: NonAttribute<City>;
  declare state?: NonAttribute<State>;
  get fullAddress(): NonAttribute<string> {
    return `${this.state?.name} ${this.city?.name || ""} ${this.streetAddress}`;
  }

  declare getState: BelongsToGetAssociationMixin<State>;
  declare setState: BelongsToSetAssociationMixin<State, State["id"]>;
  declare createState: BelongsToCreateAssociationMixin<State>;
  declare getCity: BelongsToGetAssociationMixin<City>;
  declare setCity: BelongsToSetAssociationMixin<City, City["id"]>;
  declare createCity: BelongsToCreateAssociationMixin<City>;
}

Address.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    streetAddress: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  { sequelize }
);
Address.belongsTo(State, { as: "state" });
State.hasMany(Address, { foreignKey: "cityId" });
Address.belongsTo(City, { as: "city" });
City.hasMany(Address, { foreignKey: { name: "cityId", allowNull: true } });

export default Address;
