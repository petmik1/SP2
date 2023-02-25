import { apiPath } from '../constants.js'
import { headers } from '../headers.js'

export async function getPosts(limit, sort, sortOrder, _active) {
  const response = await fetch(
    `${apiPath}listings?limit=${limit}&sort=${sort}&sorOrder=${sortOrder}&_active=${_active}`,
    { headers: headers() }
  )
  const data = await response.json()
  return await data
}
