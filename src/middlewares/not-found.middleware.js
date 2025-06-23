const notFoundMiddleware = (req, res) => {
  res.status(404).json({
    message: `request URL: ${req.method} ${req.url} not found on this server`,
  });
};

export default notFoundMiddleware;