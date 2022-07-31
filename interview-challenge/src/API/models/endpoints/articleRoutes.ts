const articleRoutes = {
  /** * @description List Articles  * @method GET */
  getAll: () => "/articles",

  /** * @description Get Article  * @method GET */
  get: (slug: string) => `/articles/${slug}`,

  /** * @description Create Article  * @method POST */
  create: () => "/articles",

  /** * @description Update Article  * @method PUT */
  update: (slug: string) => `/articles/${slug}`,

  /** * @description Delete Article  * @method DELETE */
  delete: (slug: string) => `/articles/${slug}`,
};

export default articleRoutes;
