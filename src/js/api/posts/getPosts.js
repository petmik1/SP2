import { apiPath } from '../constants.js'
import { headers } from '../headers.js'

export async function getPosts(limit) {
  const response = await fetch(
    `${apiPath}listings?limit=${limit}&sort=created&sorOrder=desc&_active=true`,
    { headers: headers() }
  )
  const data = await response.json()
  return await data
}
