import { apiPath } from '../constants.js'
import { headers } from '../headers.js'

export async function register(name, email, password, avatar) {
  // creating object with post data
  let profile = { name, email, password, avatar }
  profile = JSON.stringify(profile)

  // sending post data to api
  const response = await fetch(`${apiPath}auth/register`, {
    method: 'POST',
    body: profile,
    headers: headers('application/json'),
  })
  if (response.ok) {
    // redirecting to login page if response is ok and returning response
    location.href = '/pages/login.html'
    return await response.json()
  } else {
    throw new Error(response.statusText)
  }
}
