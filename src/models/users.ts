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
import bcrypt from "bcryptjs";

class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  declare id: CreationOptional<string>;
  declare firstname: string;
  declare lastname: string;
  declare email: string;
  declare username: string;
  declare password: string;
  declare fullName: string;
  declare role: ("Developer" | "Staff" | "Customer")[];
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
  validatePassword(password: string): boolean {
    return bcrypt.compareSync(password, this.password);
  }
}

User.init(
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
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },
    username: {
      type: DataTypes.TEXT,
      unique: true,
    },
    password: {
      type: DataTypes.TEXT,
      set(value: string) {
        this.setDataValue("password", bcrypt.hashSync(value, 10));
      },
    },
    role: {
      type: DataTypes.ARRAY(DataTypes.ENUM("Developer", "Staff", "Customer")),
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
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  { sequelize }
);

export default User;
