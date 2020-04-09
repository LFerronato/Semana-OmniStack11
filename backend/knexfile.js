// Update with your config settings.
require("dotenv").config();
module.exports = {
  production: {
    client: "mysql",
    connection: {
      host: process.env.CNN_HOST,
      database: process.env.CNN_DB,
      user: process.env.CNN_USER,
      password: process.env.CNN_PW,
    },
    migrations: {
      directory: "./src/database/migrations",
    },
    useNullAsDefault: true,
  },
};
