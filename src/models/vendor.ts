import {
  DataTypes,
  InferAttributes,
  CreationOptional,
  Model,
  NonAttribute,
  Association,
  InferCreationAttributes,
  ForeignKey,
  HasOneGetAssociationMixin,
  HasOneSetAssociationMixin,
  HasOneCreateAssociationMixin,
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
} from "sequelize";
import sequelize from "../utils/db";
import Address from "./address";
import Config from "./config";
import Station from "./stations";

class Vendor extends Model<
  InferAttributes<Vendor, { omit: "config" }>,
  InferCreationAttributes<Vendor>
> {
  declare id: CreationOptional<string>;
  declare name: string;
  declare registrationNumber: string;
  declare registrationBody: string;
  declare registrationDocumentUrl: string;
  declare contactPersonName: string;
  declare contactPhoneNumber: string;
  declare hqId?: ForeignKey<Station["id"]>;
  declare customerCareLine: string;
  declare config?: NonAttribute<Config>;
  declare configId: ForeignKey<Config["id"]>;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;

  declare getConfig: HasOneGetAssociationMixin<Config>;
  declare setConfig: HasOneSetAssociationMixin<Config, Config["id"]>;
  declare createConfig: HasOneCreateAssociationMixin<Config>;

  declare getStations: HasManyGetAssociationsMixin<Station>; // Note the null assertions!
  declare addStation: HasManyAddAssociationMixin<Station, Station["id"]>;
  declare addStations: HasManyAddAssociationsMixin<Station, Station["id"]>;
  declare setStations: HasManySetAssociationsMixin<Station, Station["id"]>;
  declare removeStation: HasManyRemoveAssociationMixin<Station, Station["id"]>;
  declare removeStations: HasManyRemoveAssociationsMixin<
    Station,
    Station["id"]
  >;
  declare hasStation: HasManyHasAssociationMixin<Station, Station["id"]>;
  declare hasStations: HasManyHasAssociationsMixin<Station, Station["id"]>;
  declare countStations: HasManyCountAssociationsMixin;
  declare createStation: HasManyCreateAssociationMixin<Station, "vendorId">;
}

Vendor.init(
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
    registrationNumber: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    registrationBody: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    registrationDocumentUrl: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    contactPersonName: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    contactPhoneNumber: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    customerCareLine: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  { sequelize }
);
Vendor.hasOne(Config, { as: "config", foreignKey: "configId" });
Config.belongsTo(Vendor, { as: "vendor" });
Vendor.hasOne(Station, { as: "hq", sourceKey: "hqId" });
Vendor.hasMany(Station, { as: "stations", foreignKey: "vendorId" });
Station.belongsTo(Vendor, { as: "vendor" });

export default Vendor;
