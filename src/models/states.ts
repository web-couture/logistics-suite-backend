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
  ForeignKey,
  InferCreationAttributes,
} from "sequelize";
import sequelize from "../utils/db";
import City from "./cities";
import Country from "./countries";

class State extends Model<
  InferAttributes<State, { omit: "cities" }>,
  InferCreationAttributes<State>
> {
  declare id: CreationOptional<string>;
  declare name: string;
  declare code: string;
  declare latitude: number;
  declare longitude: number;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
  declare countryId: ForeignKey<Country["id"]>;
  declare cities?: NonAttribute<City[]>;

  declare getCities: HasManyGetAssociationsMixin<City>; // Note the null assertions!
  declare addCity: HasManyAddAssociationMixin<City, City["id"]>;
  declare addCities: HasManyAddAssociationsMixin<City, City["id"]>;
  declare setCities: HasManySetAssociationsMixin<City, City["id"]>;
  declare removeCity: HasManyRemoveAssociationMixin<City, City["id"]>;
  declare removeCities: HasManyRemoveAssociationsMixin<City, City["id"]>;
  declare hasCity: HasManyHasAssociationMixin<City, City["id"]>;
  declare hasCities: HasManyHasAssociationsMixin<City, City["id"]>;
  declare countCities: HasManyCountAssociationsMixin;
  declare createCity: HasManyCreateAssociationMixin<City, "stateId">;

  declare static associations: {
    cities: Association<State, City>;
  };
}

State.init(
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
      type: DataTypes.STRING(3),
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

State.hasMany(City, {
  sourceKey: "id",
  foreignKey: "stateId",
  as: "cities",
  onDelete: "CASCADE",
});
City.belongsTo(State);

export default State;
