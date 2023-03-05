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
    const apiFailure = (document.createElement('p').innerHTML =
      "Couldn't connect to the server: " + response.statusText)
    const body = document.querySelector('body')
    body.append(apiFailure)
    throw new Error(response.statusText)
  }
}
