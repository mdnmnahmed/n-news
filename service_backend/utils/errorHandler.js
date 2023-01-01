export const errorHandler = (res, data, message = "something went wrong, please try again.", code = 404) => {
    res.status(code).json({
        hasError: true,
        data,
        message
    });
    return;
}