'use strict';

/**
 * Algo.js controller
 *
 * @description: A set of functions called "actions" for managing `Algo`.
 */

module.exports = {

  /**
   * Retrieve algo records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.algo.search(ctx.query);
    } else {
      return strapi.services.algo.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a algo record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.algo.fetch(ctx.params);
  },

  /**
   * Count algo records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.algo.count(ctx.query);
  },

  /**
   * Create a/an algo record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.algo.add(ctx.request.body);
  },

  /**
   * Update a/an algo record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.algo.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an algo record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.algo.remove(ctx.params);
  }
};
