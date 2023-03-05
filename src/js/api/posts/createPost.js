import { headers } from '../headers.js'
import { apiPath } from '../constants.js'

export async function createPost(title, endsAt, description, image) {
  // creating object with post data
  let post
  if (image === '') {
    post = { title, endsAt, description, media: [] }
  } else {
    const media = [image]
    post = { title, endsAt, description, media }
  }
  post = JSON.stringify(post)
  // sending post data to api
  const response = await fetch(`${apiPath}listings`, {
    method: 'POST',
    body: post,
    headers: headers('application/json'),
  })
  if (response.ok) {
    // returning response
    location.reload()
  } else {
    const apiFailure = (document.createElement('p').innerHTML =
      "Couldn't connect to the server: " + response.statusText)
    const body = document.querySelector('body')
    body.append(apiFailure)
    throw new Error(response.statusText)
  }
}
