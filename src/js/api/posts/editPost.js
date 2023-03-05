import { headers } from '../headers.js'
import { apiPath } from '../constants.js'

export async function editPost(id, title, description, image) {
  // creating object with post data
  let post
  if (image === '') {
    post = { title, description, media: [] }
  } else {
    const media = [image]
    post = { title, description, media }
  }
  post = JSON.stringify(post)
  // sending post data to api
  const response = await fetch(`${apiPath}listings/${id}`, {
    method: 'PUT',
    body: post,
    headers: headers('application/json'),
  })
  if (response.ok) {
    // returning response
    return await response.json()
  } else {
    const apiFailure = (document.createElement('p').innerHTML =
      "Couldn't connect to the server: " + response.statusText)
    const body = document.querySelector('body')
    body.append(apiFailure)
    throw new Error(response.statusText)
  }
}
