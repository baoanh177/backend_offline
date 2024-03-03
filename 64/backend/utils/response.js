module.exports = {
    success: (res, status, message, data) => {
        res.status(status).json({
            status,
            message,
            data
        })
    },
    error: (res, status, message, errors) => {
        res.status(status).json({
            status,
            message,
            errors
        })
    },
}