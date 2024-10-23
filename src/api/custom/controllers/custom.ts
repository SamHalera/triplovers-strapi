/**
 * A set of functions called "actions" for `custom`
 */

export default {
  getRoomsList: async (ctx) => {
    try {
      const roomsList = await strapi.documents("api::room.room").findMany({
        status: "published",
        populate: {
          image: true,
        },
      });

      return roomsList;
    } catch (err) {
      ctx.body = err;
    }
  },

  getRoomBySlug: async (ctx) => {
    try {
      const { slug } = ctx.request.query;

      const room = await strapi.documents("api::room.room").findFirst({
        filters: {
          slug,
        },
        populate: {
          image: true,
          media: true,
        },
      });

      return room;
    } catch (err) {
      ctx.body = err;
      console.log(err);
    }
  },

  getPageDataByPath: async (ctx) => {
    try {
      const { path } = ctx.request.query;

      const pageData = await strapi
        .documents("api::public-page.public-page")
        .findFirst({
          filters: {
            slug: path,
          },
        });

      return pageData;
    } catch (error) {
      console.log("error", error);
    }
  },
};
