const logger = (request, response, next) => {
  console.log(`[${request.method}] ${request.originalUrl}`);
  next();
};

module.exports = logger;
