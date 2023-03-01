import { headers } from '../headers.js'
import { apiPath } from '../constants.js'

export async function addBid(id, bid) {
  console.log(typeof bid)
  let post = {
    amount: Number(bid),
  }
  console.log(post)
  post = JSON.stringify(post)
  console.log(post)
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
