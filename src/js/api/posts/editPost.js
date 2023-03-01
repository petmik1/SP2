import { headers } from '../headers.js'
import { apiPath } from '../constants.js'

export async function editPost(id, title, description, image) {
  let post = { title, description, image }
  post = JSON.stringify(post)

  const response = await fetch(`${apiPath}listings/${id}`, {
    method: 'PUT',
    body: post,
    headers: headers('application/json'),
  })
  if (response.ok) {
    return await response.json()
  } else {
    throw new Error(response.statusText)
  }
}
