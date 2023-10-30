const express = require("express");
const cors = require("cors");
const { initDb } = require("./helpers/database");
const config = require("./config/config");
const { logError, sendError } = require("./middlewares/error-handling");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

initDb().then(() => {
    console.log("DB Connected");

    app.use("/", require("./api/books/books.controller"));

    // error handling
    app.use(logError);
    app.use(sendError);
});


app.listen(config.port, (err) => {
    if (err) throw err;

    console.log(`Server is up ${config.port}`);
});
