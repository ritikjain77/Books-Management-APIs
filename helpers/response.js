exports.createError = (message, statusCode, info) => {
    return { message, statusCode, info };
};

exports.sendSuccess = (res, responsePayload, message, statusCode = 200) => {
    return res.status(statusCode).send({ metaData: {}, data: responsePayload, message });
};
