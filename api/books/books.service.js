const queries = require("./books.queries");
const { sendSuccess } = require("../../helpers/response");
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Types;

exports.addBook = (req, res, next) => {
    const { title, author } = req.body;
    let insertQuery = {
        title: title,
        author: author,
    };
    if (req.body?.summary) insertQuery.summary = req.body.summary;
    console.log(insertQuery);
    queries
        .addBook(insertQuery)
        .then((result) => {
            let message = "Book is Added";
            return sendSuccess(res, result, message);
        })
        .catch((err) => {
            if (err?.code == 11000) {
                err.info = "Book already Exists";
            }
            return next(err);
        });
};

exports.fetchAllBooks = (req, res, next) => {
    queries
        .fetchAllBooks({})
        .then((result) => {
            return sendSuccess(res, result);
        })
        .catch((err) => {
            return next(err);
        });
};

exports.getBookDetail = (req, res, next) => {
    const { bookId } = req.params;
    queries
        .fetchAllBooks({ _id: bookId })
        .then((result) => {
            info = "";
            if (result.length == 0) info = "Book Doesn't Exists";
            return sendSuccess(res, result, info);
        })
        .catch((err) => {
            return next(err);
        });
};

exports.updateBookDetail = (req, res, next) => {
    const { bookId } = req.body;

    let findQuery = {
        _id: new ObjectId(bookId),
    };
    let updateQuery = {};
    if (req.body?.title) updateQuery.title = req.body.title;
    if (req.body?.author) updateQuery.author = req.body.author;
    if (req.body?.summary) updateQuery.summary = req.body.summary;

    queries
        .updateBookDetail(findQuery, updateQuery)
        .then((result) => {
            console.log(result);
            let info = "";
            if (result.matchedCount == 0) info = "Book Doesn't Exists";
            else if (result.matchedCount == 1) info = "Successfully updated";
            return sendSuccess(res, result, info);
        })
        .catch((err) => {
            return next(err);
        });
};

exports.deleteBook = (req, res, next) => {
    const { bookId } = req.params;

    queries
        .deleteBook({ _id: new ObjectId(bookId) })
        .then((result) => {
            let info = "";
            if (result.deletedCount == 1) info = "SuccessFully Deleted";
            else if (result.deletedCount == 0) info = "Book Doesn't Exists";
            return sendSuccess(res, result, info);
        })
        .catch((err) => {
            return next(err);
        });
};
