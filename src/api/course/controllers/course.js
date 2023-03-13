'use strict';

/**
 * course controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::course.course', ({ strapi }) =>  ({
    async findOne(ctx) {
      const {id} = ctx.params;
      const entry = await strapi.db.query('api::course.course').findOne({
        where: {slug:id},
        populate: ["Thumbnail", "Banner", "curricula", "reviews"]
      });
      const sanitizedResults = await this.sanitizeOutput(entry, ctx);
  
      return this.transformResponse(sanitizedResults);
    }
  }));
