import { apiPath } from '../constants.js'
import { headers } from '../headers.js'

export async function getPosts(limit, sort, sortOrder, _active) {
  // fetching data from api
  const response = await fetch(
    `${apiPath}listings?sort=${sort}&sortOrder=${sortOrder}&_active=${_active}&limit=${limit}`,
    { headers: headers() }
  )
  const data = await response.json()

  // returning data
  return await data
}
