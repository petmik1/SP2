export function indexCarruselPost(post, i) {
  const carousel = document.querySelector('.carousel-inner')
  const carousel_item = document.createElement('div')
  const carousel_caption = document.createElement('div')
  const current_bid = document.createElement('p')
  const timeLeft = document.createElement('p')
  const bid = document.createElement('button')
  const media = document.createElement('img')
  carousel_item.classList.add(`carousel-item`)
  carousel_caption.classList.add(`carousel-caption`)
  media.classList.add(`carousel-image`, `ratio`, `ratio-16x9`)
  if (i === 1) {
    carousel_item.classList.add(`active`)
  }
  current_bid.innerText = post._count.bids
  timeLeft.innerText = post.endsAt
  bid.innerText = 'Bid'
  media.src = post.media[0]
  carousel_caption.append(current_bid, timeLeft, bid)
  carousel_item.append(media)
  carousel_item.append(carousel_caption)
  carousel.append(carousel_item)
}
