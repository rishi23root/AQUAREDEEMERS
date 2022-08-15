// custom error class for personalized message and status codes
class AppError extends Error {
    constructor(message, statusCode=400) {
        super(message);

        this.statusCode = statusCode;
        this.status = `${`${statusCode}`.startsWith("4") ? "Fail" : "Error"}`;
        this.isOperational = true;

        Error.captureStackTrace(this, this.constructor);
    }
}

// handleing resoponse when process in development
const handleDevelopmentError = (err, res) => {
    console.error("Error: ", err.message);

    res.status(err.statusCode)
        .json({
            status: err.status,
            message: err.message,
            error: err,
            trace: err.stack,
        });
};

// handleing resoponse when process in production
const handleProductionError = (err, res) => {
    if (err.isOperational) {

        res.status(err.statusCode)
            .json({
                status: err.status,
                statusCode: err.statusCode,
                message: err.message,
            });

    } else {
        res.status(500)
            .json({
                status: err.status,
                statusCode: err.statusCode,
                message: "Ahh, Something went very wrong! 😟",
            });
    }
};

// middlewere for the app
const errorHandler = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "Error";
    console.log(err.statusCode,err.status,err.message);

    if (process.env.NODE_ENV === "development") {
        handleDevelopmentError(err, res);
    } else if (process.env.NODE_ENV === "production") {
        handleProductionError(err, res);
    }
};


module.exports = {
    errorHandler,
    ErrorConstructor: AppError
}