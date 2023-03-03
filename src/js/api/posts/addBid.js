import { headers } from '../headers.js'
import { apiPath } from '../constants.js'

export async function addBid(id, bid) {
  let post = {
    amount: Number(bid),
  }

  post = JSON.stringify(post)

  const response = await fetch(`${apiPath}listings/${id}/bids`, {
    method: 'post',
    body: post,
    headers: headers('application/json'),
  })
  if (response.ok) {
    location.reload()
  } else {
    throw new Error(response.statusText)
  }
}
