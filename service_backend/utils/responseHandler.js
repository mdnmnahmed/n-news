export const responseHandler = (data, res, message = "successful", code = 200) => {
    res.status(code).json({
        hasError: false,
        message,
        data
    });
    return;
}