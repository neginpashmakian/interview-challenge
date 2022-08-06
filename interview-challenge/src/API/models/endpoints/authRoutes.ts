export const authRoutes = {
  /** * @description Authentication  * @method POST */
  login: () => '/users/login',

  /** * @description Registration  * @method POST */
  register: () => '/users',

  /** * @description Get Current User  * @method GET */
  getCurrentUser: () => '/user',

  /** * @description Get Profile  * @method GET */
  getUserProfile: (username: string) => `/profiles/${username}`,
}

export default authRoutes
