export function singlePost(post) {
  let bids = post.bids
  bids.sort((a, b) => {
    return a.amount - b.amount
  })
  bids = bids.reverse()
  const container = document.querySelector('#api_result')
  const postInfo = document.createElement('div')
  const bidsContainer = document.createElement('div')
  const imgDiv = document.createElement('div')
  const textDiv = document.createElement('div')
  const title = document.createElement('h1')
  const description = document.createElement('p')
  const seller = document.createElement('p')

  const bidTitle = document.createElement('h3')
  for (let i = 0; i < post.media.length; i++) {
    const img = document.createElement('img')
    if (i === 0) {
      img.classList.add('w-100', 'mx-auto')
    } else {
      img.classList.add('w-25')
    }
    img.src = post.media[i]
    imgDiv.classList.add('mx-auto', 'me-md-5')
    imgDiv.append(img)
  }

  for (let j = 0; j < bids.length; j++) {
    const bid = document.createElement('p')
    if (j === 0) {
      bid.classList.add('leader')
    }
    bid.innerText = bids[j].bidderName + ': ' + bids[j].amount + 'credits'
    bidsContainer.append(bid)
  }
  container.classList.add(
    'd-flex',
    'justify-content-center',
    'flex-column',
    'my-5'
  )
  postInfo.classList.add(
    'd-flex',
    'justify-content-center',
    'flex-column',
    'flex-md-row'
  )
  bidsContainer.classList.add('mx-auto', 'w-50', 'mt-5', 'text-center')
  bidTitle.innerText = 'Bids'
  title.innerText = post.title
  description.innerText = post.description
  seller.innerText = 'seller: ' + post.seller.name
  bidsContainer.prepend(bidTitle)
  textDiv.append(title, description, seller)
  postInfo.append(imgDiv, textDiv)
  container.append(postInfo, bidsContainer)
}
