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
}
