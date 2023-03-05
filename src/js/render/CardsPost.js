import { countdown } from './countdown.js'

export function CardsPost(post) {
  // getting and creating elements
  const cards = document.querySelector('.cards')
  const card = document.createElement('div')
  const card_body = document.createElement('div')
  const card_title = document.createElement('h5')
  const card_media = document.createElement('img')
  const card_footer = document.createElement('div')
  const card_footer_time = document.createElement('p')
  const card_footer_button_div = document.createElement('div')
  const card_footer_button = document.createElement('a')

  // counting down the time left
  countdown(post.endsAt, card_footer_time)

  // adding classes
  card.classList.add('card')
  card_body.classList.add('card-body')
  card_media.classList.add('card-image', 'ratio', 'ratio-16x9')
  card_footer.classList.add(
    'card-footer',
    'p-0',
    'mx-auto',
    'd-flex',
    'flex-column'
  )
  card_footer_button_div.classList.add('d-flex', 'justify-content-center')
  card_footer_button.classList.add('btn', 'btn-primary', 'w-75')

  // setting text
  card_title.innerText = post.title
  card_media.src = post.media[0]

  if (post._count !== undefined) {
    // adding bids if they exist
    const card_footer_bid = document.createElement('p')
    card_footer_bid.innerText = 'bids: ' + post._count.bids
    card_footer.append(card_footer_bid)
  }

  // setting text
  card_footer_button.innerText = 'more'

  // setting href
  card_footer_button.href = `../../../pages/product.html?id=${post.id}`

  // appending elements
  card_footer_button_div.append(card_footer_button)
  card_body.append(card_title, card_media)
  card_footer.append(card_footer_time, card_footer_button_div)
  card.append(card_body, card_footer)
  cards.append(card)
}
