const { createError } = require("../helpers/response");

function isEmpty(obj) {
    if (obj === undefined || obj === null) return true;
    if (!obj.constructor === Object) return true;
    if (Object.entries(obj).length) return false;
    else return true;
}

exports.validateSchema = (schema) => {
    return (req, res, next) => {
        try {
            if (schema.path) {
                if (isEmpty(req.params))
                    return next(
                        createError("Path params missing", 400, {
                            info: "Please provide path parameters",
                        }),
                    );

                const validation = schema.path.validate(req.params);
                if (validation.error)
                    return next(
                        createError("Path Parameter verfication failed", 400, validation.error),
                    );
                return next();
            }

            if (schema.query) {
                if (req.query) {
                    const validation = schema.query.validate(req.query);
                    if (validation.error)
                        return next(
                            createError("Query params verification failed", 400, validation.error),
                        );
                    return next();
                }
            }

            if (schema.body) {
                if (isEmpty(req.body)) {
                    return next(
                        createError("Req body missing", 400, {
                            details: "Please provide a request body",
                            schema: schema.body.validate(req.body).error,
                        }),
                    );
                }

                const validation = schema.body.validate(req.body, { convert: false });
                if (validation.error)
                    return next(createError("Req body verfication failed", 400, validation.error));

                return next();
            }
            next();
        } catch (err) {
            next(err);
        }
    };
};
