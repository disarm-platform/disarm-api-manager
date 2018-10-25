'use strict';

/**
 * Algorelease.js controller
 *
 * @description: A set of functions called "actions" for managing `Algorelease`.
 */

module.exports = {

  /**
   * Retrieve algorelease records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.algorelease.search(ctx.query);
    } else {
      return strapi.services.algorelease.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a algorelease record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.algorelease.fetch(ctx.params);
  },

  /**
   * Count algorelease records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.algorelease.count(ctx.query);
  },

  /**
   * Create a/an algorelease record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.algorelease.add(ctx.request.body);
  },

  /**
   * Update a/an algorelease record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.algorelease.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an algorelease record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.algorelease.remove(ctx.params);
  }
};
