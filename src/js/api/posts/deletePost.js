import { headers } from '../headers.js'
import { apiPath } from '../constants.js'

export async function deletePost(id) {
  // deleting post from api using id
  const response = await fetch(`${apiPath}listings/${id}`, {
    method: 'DELETE',
    headers: headers('application/json'),
  })
  if (!response.ok) {
    // throwing error if response is not ok
    throw new Error(response.statusText)
  }
}
