import { headers } from '../headers.js'
import { apiPath } from '../constants.js'
export async function login(email, password) {
  console.log(email, password)
  let profile = { email, password }
  profile = JSON.stringify(profile)
  console.log(profile)

  const response = await fetch(`${apiPath}auth/login`, {
    method: 'POST',
    body: profile,
    headers: headers('application/json'),
  })
  if (response.ok) {
    return await response.json()
  }
  throw new Error(response.statusText)
}
