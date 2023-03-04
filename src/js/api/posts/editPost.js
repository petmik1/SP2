import { headers } from '../headers.js'
import { apiPath } from '../constants.js'

export async function editPost(id, title, description, image) {
  console.log(image)
  let post
  if (image === '') {
    post = { title, description, media: [] }
  } else {
    const media = [image]
    post = { title, description, media }
  }
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
