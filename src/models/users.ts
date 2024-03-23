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
  declare email: string;
  declare username: string;
  declare password: string;
  declare pin: string;
  declare role: ("Developer" | "Staff" | "Customer")[];
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
  validatePassword(password: string): boolean {
    return bcrypt.compareSync(password, this.password);
  }
  validatePin(pin: string): boolean {
    return bcrypt.compareSync(pin, this.pin);
  }
}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    email: {
      type: DataTypes.TEXT,
      unique: true,
      validate: {
        customValidator(value: string | null) {
          if (!value && (this.role as string[]).includes("Customer")) {
            throw new Error("Customer must have an email");
          }
        },
      },
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
    pin: {
      type: DataTypes.TEXT,
      set(value: string) {
        this.setDataValue("pin", bcrypt.hashSync(value, 10));
      },
    },
    role: {
      type: DataTypes.ARRAY(DataTypes.ENUM("Developer", "Staff", "Customer")),
    },

    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  { sequelize }
);

export default User;
