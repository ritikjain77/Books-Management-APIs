const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: { type: String, unique: true },
    author: String,
    summary: String,
});

module.exports = mongoose.model("Books", bookSchema);
