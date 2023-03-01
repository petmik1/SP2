import { headers } from '../headers.js'
import { apiPath } from '../constants.js'

export async function createPost(title, endsAt, description, image) {
  let post = { title, endsAt, description, image }
  post = JSON.stringify(post)

  const response = await fetch(`${apiPath}listings`, {
    method: 'POST',
    body: post,
    headers: headers('application/json'),
  })
  if (response.ok) {
    location.reload()
  }
  throw new Error(response.statusText)
}
