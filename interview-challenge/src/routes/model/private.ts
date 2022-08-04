const articleBase = '/article'
export const privateRouteNames = {
  article: {
    base: articleBase,
    detail: articleBase + '/detail',
    navigateToDetail: (slug: string) => articleBase + `/detail/${slug}`,
  },
}
