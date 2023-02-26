import { apiPath } from '../constants.js'
import { headers } from '../headers.js'

export async function register(name, email, password, avatar) {
  let profile = { name, email, password, avatar }
  profile = JSON.stringify(profile)

  const response = await fetch(`${apiPath}auth/register`, {
    method: 'POST',
    body: profile,
    headers: headers('application/json'),
  })
  if (response.ok) {
    return await response.json()
  }
  throw new Error(response.statusText)
}