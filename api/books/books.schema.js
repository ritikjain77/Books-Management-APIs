const Joi = require("joi");

exports.addBook = {
    body: Joi.object({
        title: Joi.string().required(),
        author: Joi.string().required(),
        summary: Joi.string(),
    }),
};

exports.getBookDetail = {
    path: Joi.object({
        bookId: Joi.string().required(),
    }),
};

exports.updateBookDetail = {
    body: Joi.object({
        bookId: Joi.string().required(),
        title: Joi.string(),
        author: Joi.string(),
        summary: Joi.string(),
    }),
};

exports.deleteBook = {
    path: Joi.object({
        bookId: Joi.string().required(),
    }),
};
