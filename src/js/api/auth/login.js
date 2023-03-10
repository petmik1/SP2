import { headers } from '../headers.js'
import { apiPath } from '../constants.js'
export async function login(email, password) {
  // creating object with post data
  let profile = { email, password }
  profile = JSON.stringify(profile)

  // sending post data to api
  const response = await fetch(`${apiPath}auth/login`, {
    method: 'POST',
    body: profile,
    headers: headers('application/json'),
  })
  if (response.ok) {
    // returning response if response is ok
    return await response.json()
  } else {
    const apiFailure = (document.createElement('p').innerHTML =
      "Couldn't connect to the server: " + response.statusText)
    const body = document.querySelector('body')
    body.append(apiFailure)
    throw new Error(response.statusText)
  }
}
