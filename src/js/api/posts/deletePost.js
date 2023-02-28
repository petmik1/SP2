import { headers } from '../headers.js'
import { apiPath } from '../constants.js'

export async function deletePost(id) {
  const response = await fetch(`${apiPath}listings/${id}`, {
    method: 'DELETE',
    headers: headers('application/json'),
  })
  if (response.ok) {
    return await response.json()
  }
  throw new Error(response.statusText)
}
