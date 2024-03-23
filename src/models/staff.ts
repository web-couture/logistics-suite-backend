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
import User from "./users";
import Vendor from "./vendor";
import Station from "./stations";

class Staff extends Model<
  InferAttributes<Staff>,
  InferCreationAttributes<Staff>
> {
  declare id: CreationOptional<string>;
  declare userId: ForeignKey<User["id"]>;
  declare vendorId: ForeignKey<Vendor["id"]>;
  declare firstname: string;
  declare lastname: string;
  declare phoneNumber: string;
  declare fullName: string;
  declare stationId: ForeignKey<Station["id"]>;
  declare role:
    | "Director"
    | "HR"
    | "Manager"
    | "Station Operative"
    | "Vehicle Assistant"
    | "Driver";
  //   declare guarantor;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

Staff.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    firstname: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    fullName: {
      type: DataTypes.VIRTUAL,
      get() {
        return `${this.firstname} ${this.lastname}`;
      },
      set(value: any) {
        throw new Error("fullName cannot be set");
      },
    },
    phoneNumber: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM(
        ...[
          "Director",
          "HR",
          "Manager",
          "Station Operative",
          "Vehicle Assistant",
          "Driver",
        ]
      ),
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  { sequelize }
);

User.hasOne(Staff, {
  as: "staffInfo",
  foreignKey: {
    name: "userId",
    allowNull: false,
  },
});
Staff.belongsTo(User, { as: "userInfo" });
Vendor.hasMany(Staff, { as: "staff", foreignKey: "vendorId" });
Staff.belongsTo(Vendor);

export default Staff;
