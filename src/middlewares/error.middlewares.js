const errorMiddleware = (err, req, res, next) => {
  console.log(err);
  const { statusCode = 500, message = "Something went wrong!", field } = err;

  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
    ...(field && { field }),
  });
};

export default errorMiddleware;