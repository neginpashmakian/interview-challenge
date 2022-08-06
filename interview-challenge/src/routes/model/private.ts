const articleBase = '/article'
export const privateRouteNames = {
  article: {
    base: articleBase,
    detail: articleBase + '/detail/:slug',
    new: articleBase + '/detail',
    navigateToDetail: (slug: string) => articleBase + `/detail/${slug}`,
  },
}
