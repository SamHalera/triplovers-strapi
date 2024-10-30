// ./src/middlewares/logger.ys
module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    // Log method and URL
    console.log(`Request to ${ctx.method} ${ctx.url}`);

    // Log request body
    console.log("Request Body:", ctx.request.body);
    if (ctx.request.body) {
      console.log("Request Body:", ctx.request.body);
    }

    await next();
  };
};
