'use strict';

/**
 * Run.js controller
 *
 * @description: A set of functions called "actions" for managing `Run`.
 */

module.exports = {

  /**
   * Retrieve run records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.run.search(ctx.query);
    } else {
      return strapi.services.run.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a run record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.run.fetch(ctx.params);
  },

  /**
   * Count run records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.run.count(ctx.query);
  },

  /**
   * Create a/an run record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.run.add(ctx.request.body);
  },

  /**
   * Update a/an run record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.run.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an run record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.run.remove(ctx.params);
  }
};
