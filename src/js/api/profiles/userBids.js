import { apiPath } from '../constants.js'
import { headers } from '../headers.js'

export async function usersBids(name) {
  console.log('usersListings')
  const response = await fetch(`${apiPath}profiles/${name}/bids`, {
    headers: headers(),
  })
  const data = await response.json()
  return await data
}