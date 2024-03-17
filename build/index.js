import sequelize from "./utils/db";
sequelize.authenticate().then(() => {
  console.log("connected");
});
