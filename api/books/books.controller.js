const router = require("express").Router();
const { validateSchema } = require("../../middlewares/schema-validation");
const schema = require("./books.schema");
const service = require("./books.service");

router.post("/book", validateSchema(schema.addBook), service.addBook);

router.get("/books/all", service.fetchAllBooks);

router.get("/book/:bookId", validateSchema(schema.getBookDetail), service.getBookDetail);

router.patch("/book", validateSchema(schema.updateBookDetail), service.updateBookDetail);

router.delete("/book/:bookId", validateSchema(schema.deleteBook), service.deleteBook);

module.exports = router;
