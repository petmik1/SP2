import { countdown } from './countdown.js'

export function indexCarruselPost(post, i) {
  const carousel = document.querySelector('.carousel-inner')
  const carousel_item = document.createElement('div')
  const carousel_caption = document.createElement('div')
  const current_bid = document.createElement('p')
  const timeLeft = document.createElement('p')
  const bid = document.createElement('a')
  const more_container = document.createElement('div')
  const media = document.createElement('img')
  carousel_item.classList.add(`carousel-item`)
  carousel_caption.classList.add(
    `d-flex`,
    `justify-content-around`,
    `align-items-center`,
    'carousel-caption'
  )

  media.classList.add(`carousel-image`, `ratio`, `ratio-16x9`)
  bid.classList.add(`btn`, `btn-primary`, 'flex-1')
  timeLeft.classList.add(`flex-2`)
  if (i === 1) {
    carousel_item.classList.add(`active`)
  }

  countdown(post.endsAt, timeLeft)
  current_bid.innerText = 'Bids: ' + post._count.bids
  timeLeft.innerText = post.endsAt
  bid.innerText = 'More'

  media.src = post.media[0]
  more_container.append(bid)
  carousel_caption.append(current_bid, timeLeft, more_container)
  carousel_item.append(media)
  carousel_item.append(carousel_caption)
  carousel.append(carousel_item)
}
