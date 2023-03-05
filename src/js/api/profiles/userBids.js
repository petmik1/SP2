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
  if (response.ok) {
    // returning data
    return await data
  } else {
    const apiFailure = (document.createElement('p').innerHTML =
      "Couldn't connect to the server: " + response.statusText)
    const body = document.querySelector('body')
    body.append(apiFailure)
    throw new Error(response.statusText)
  }
}
