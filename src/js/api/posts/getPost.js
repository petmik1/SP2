import { apiPath } from '../constants.js'
import { headers } from '../headers.js'

export async function getPost(id) {
  const response = await fetch(
    `${apiPath}listings/${id}?_seller=true&_bids=true`,
    { headers: headers() }
  )
  const data = await response.json()
  return await data
}
