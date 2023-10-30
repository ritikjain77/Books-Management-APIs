const mongoose = require("mongoose");
const Book = require("../../models/books");

exports.addBook = (insertQuery) => {
    return Book.create(insertQuery);
};

exports.fetchAllBooks = (findQuery) => {
    return Book.find(findQuery);
};

exports.updateBookDetail = (findQuery, updateQuery) => {
    return Book.updateOne(findQuery, { $set: updateQuery });
};

exports.deleteBook = (findQuery) => {
    return Book.deleteOne(findQuery);
};
