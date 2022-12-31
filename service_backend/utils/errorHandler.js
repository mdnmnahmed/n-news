export const errorHandler = (data, res, message = "something went wrong", code = 404) => {
    res.status(code).json({
        hasError: true,
        data,
        message
    });
    return;
}