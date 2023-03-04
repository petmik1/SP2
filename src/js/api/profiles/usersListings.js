import { apiPath } from '../constants.js'
import { headers } from '../headers.js'

export async function usersListings(name) {
  // fetching data from api
  const response = await fetch(`${apiPath}profiles/${name}/listings`, {
    headers: headers(),
  })
  const data = await response.json()

  // returning data
  return await data
}
