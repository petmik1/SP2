import { apiPath } from '../constants.js'
import { headers } from '../headers.js'

export async function register(name, email, password, avatar) {
  console.log(name, email, password)
  let profile = { name, email, password, avatar }
  profile = JSON.stringify(profile)
  console.log(profile)

  const response = await fetch(`${apiPath}auth/register`, {
    method: 'POST',
    body: profile,
    headers: headers('application/json'),
  })
  const data = await response.json()
  console.log(data)
}
