'use strict';

/**
 * Releases.js controller
 *
 * @description: A set of functions called "actions" for managing `Releases`.
 */

module.exports = {

  /**
   * Retrieve releases records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.releases.search(ctx.query);
    } else {
      return strapi.services.releases.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a releases record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.releases.fetch(ctx.params);
  },

  /**
   * Count releases records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.releases.count(ctx.query);
  },

  /**
   * Create a/an releases record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.releases.add(ctx.request.body);
  },

  /**
   * Update a/an releases record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.releases.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an releases record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.releases.remove(ctx.params);
  }
};
