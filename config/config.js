require("dotenv-flow").config({ path: `${__dirname}` });

module.exports = {
    env: process.env.NODE_ENV,
    port: process.env.PORT,
    dbUser: process.env.DB_USER,
    dbPass: process.env.DB_PASSWORD,
    dbName: process.env.DB_NAME,
};
