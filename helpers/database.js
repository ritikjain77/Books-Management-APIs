const mongoose = require("mongoose");
const config = require("../config/config");

let uri = `mongodb+srv://${config.dbUser}:${config.dbPass}@mycluster.xr6i71w.mongodb.net/${config.dbName}?retryWrites=true&w=majority`;

const initDb = () => {
    return new Promise(async (resolve, reject) => {
        try {
            await mongoose.connect(uri, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });

            resolve(mongoose);
        } catch (err) {
            reject(err);
        }
    });
};

module.exports = { initDb };
