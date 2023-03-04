import { apiPath } from '../constants.js'
import { headers } from '../headers.js'

export async function usersBids(name) {
  // fetching data from api
  const response = await fetch(
    `${apiPath}profiles/${name}/bids?_listings=true`,
    {
      headers: headers(),
    }
  )
  const data = await response.json()

  // returning data
  return await data
}
