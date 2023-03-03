import { countdown } from './countdown.js'

export function CardsPost(post) {
  const cards = document.querySelector('.cards')
  const card = document.createElement('div')
  const card_body = document.createElement('div')
  const card_title = document.createElement('h5')
  const card_media = document.createElement('img')
  const card_footer = document.createElement('div')
  const card_footer_time = document.createElement('p')
  const card_footer_button_div = document.createElement('div')
  const card_footer_button = document.createElement('a')

  countdown(post.endsAt, card_footer_time)
  card.classList.add(
    'card',
    'display',
    'flex',
    'flex-column',
    'h-100',
    'overflow-hidden'
  )
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
  card_title.innerText = post.title
  card_media.src = post.media[0]

  if (post._count !== undefined) {
    const card_footer_bid = document.createElement('p')
    card_footer_bid.innerText = 'bids: ' + post._count.bids
    card_footer.append(card_footer_bid)
  }

  card_footer_button.innerText = 'more'
  card_footer_button.href = `../../../pages/product.html?id=${post.id}`
  card_footer_button_div.append(card_footer_button)
  card_body.append(card_title, card_media)
  card_footer.append(card_footer_time, card_footer_button_div)
  card.append(card_body, card_footer)
  cards.append(card)
}
