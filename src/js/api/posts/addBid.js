import { headers } from '../headers.js'
import { apiPath } from '../constants.js'

export async function addBid(id, bid) {
  // creating object with post data
  let post = {
    amount: Number(bid),
  }
  post = JSON.stringify(post)

  // sending post data to api
  const response = await fetch(`${apiPath}listings/${id}/bids`, {
    method: 'post',
    body: post,
    headers: headers('application/json'),
  })

  if (response.ok) {
    // reloading page if response is ok
    location.reload()
  } else {
    const apiFailure = (document.createElement('p').innerHTML =
      "Couldn't connect to the server: " + response.statusText)
    const body = document.querySelector('body')
    body.append(apiFailure)
    throw new Error(response.statusText)
  }
}
