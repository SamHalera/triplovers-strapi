// import type { Core } from '@strapi/strapi';

import { Core } from "@strapi/strapi";
import { slugify } from "./lib/slugify";

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({ strapi }: { strapi: Core.Strapi }) {
    strapi.db.lifecycles.subscribe({
      async beforeCreate(event) {},
      async afterCreate(event) {
        try {
          const slug = slugify(event.result.title);

          await strapi.documents("api::public-page.public-page").update({
            documentId: event.result.documentId,
            data: {
              slug,
            },
          });
        } catch (error) {
          console.log("error==>", error);
        }
      },
      async afterUpdate(event) {},
    });
  },
};
