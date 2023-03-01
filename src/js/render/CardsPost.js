export function CardsPost(post) {
  const cards = document.querySelector('.cards')
  const card = document.createElement('div')
  const card_body = document.createElement('div')
  const card_title = document.createElement('h5')
  const card_media = document.createElement('img')
  const card_footer = document.createElement('div')
  const card_footer_bid = document.createElement('p')
  const card_footer_time = document.createElement('p')
  const card_footer_button = document.createElement('a')
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
    'd-flex',
    'justify-content-between',
    'align-items-center'
  )
  card_footer_button.classList.add('btn', 'btn-primary')
  card_title.innerText = post.title
  card_media.src = post.media[0]
  card_footer_bid.innerText = 'bids: ' + post._count.bids
  card_footer_time.innerText = post.endsAt
  card_footer_button.innerText = 'Bid'
  card_footer_button.href = `../../../pages/product.html?id=${post.id}`
  card_body.append(card_title, card_media)
  card_footer.append(card_footer_bid, card_footer_time, card_footer_button)
  card.append(card_body, card_footer)
  cards.append(card)
}
