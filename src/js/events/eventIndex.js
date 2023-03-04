import { getPosts } from '../api/posts/getPosts.js'
import { indexCarruselPosts } from '../render/indexCarruselPosts.js'
import { CardsPosts } from '../render/CardsPosts.js'

export async function eventIndex() {
  // Creating carrusel
  const carouselData = await getPosts(5, 'endsAt', 'asc', 'true')
  indexCarruselPosts(carouselData)

  // Creating cards
  const cardsData = await getPosts(100, 'created', 'desc', 'false')
  CardsPosts(cardsData)

  // Creating event for filters
  const form = document.querySelector('#filters')
  form.addEventListener('click', async (e) => {
    const sortOrder = form.sortOrder.value
    const sortBy = form.sortBy.value
    const active = form.active.value
    const cards = document.querySelector('.cards')
    cards.innerHTML = ''
    console.log(100, sortBy, sortOrder, active)
    const cardsData = await getPosts(100, sortBy, sortOrder, active)
    CardsPosts(cardsData)
  })
}
