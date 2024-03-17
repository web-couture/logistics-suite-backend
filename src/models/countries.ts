import {
  DataTypes,
  InferAttributes,
  CreationOptional,
  Model,
  NonAttribute,
  HasManyGetAssociationsMixin,
  HasManyAddAssociationMixin,
  HasManyAddAssociationsMixin,
  HasManySetAssociationsMixin,
  HasManyRemoveAssociationMixin,
  HasManyRemoveAssociationsMixin,
  HasManyHasAssociationMixin,
  HasManyHasAssociationsMixin,
  HasManyCountAssociationsMixin,
  HasManyCreateAssociationMixin,
  Association,
  InferCreationAttributes,
} from "sequelize";
import sequelize from "../utils/db";
import State from "./states";

class Country extends Model<
  InferAttributes<Country, { omit: "states" }>,
  InferCreationAttributes<Country>
> {
  declare id: CreationOptional<string>;
  declare name: string;
  declare code: string;
  declare latitude: number;
  declare longitude: number;
  declare currency: string;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;

  declare states?: NonAttribute<State[]>;

  declare getStates: HasManyGetAssociationsMixin<State>; // Note the null assertions!
  declare addState: HasManyAddAssociationMixin<State, State["id"]>;
  declare addStates: HasManyAddAssociationsMixin<State, State["id"]>;
  declare setStates: HasManySetAssociationsMixin<State, State["id"]>;
  declare removeState: HasManyRemoveAssociationMixin<State, State["id"]>;
  declare removeStates: HasManyRemoveAssociationsMixin<State, State["id"]>;
  declare hasState: HasManyHasAssociationMixin<State, State["id"]>;
  declare hasStates: HasManyHasAssociationsMixin<State, State["id"]>;
  declare countStates: HasManyCountAssociationsMixin;
  declare createState: HasManyCreateAssociationMixin<State, "countryId">;

  declare static associations: {
    states: Association<Country, State>;
  };
}

Country.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },
    code: {
      type: DataTypes.STRING(3),
      allowNull: false,
      unique: true,
    },
    latitude: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    longitude: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    currency: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  { sequelize }
);
Country.hasMany(State, {
  sourceKey: "id",
  foreignKey: "countryId",
  as: "states",
  onDelete: "CASCADE",
});
State.belongsTo(Country);
export default Country;
