import { apiPath } from '../constants.js'
import { headers } from '../headers.js'

export async function usersListings(name) {
  const response = await fetch(`${apiPath}profiles/${name}/listings`, {
    headers: headers(),
  })
  const data = await response.json()
  return await data
}
