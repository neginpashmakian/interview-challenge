import { authAPIs } from 'API/axios/categories/authAPIs'
import { articleAPIs } from 'API/axios/categories/articleAPIs'
import { tagAPIs } from './tagAPIs'

export const APIs = {
  auth: authAPIs,
  article: articleAPIs,
  tag: tagAPIs,
}
