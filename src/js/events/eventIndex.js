import { getPosts } from '../api/posts/getPosts.js'
import { indexCarruselPosts } from '../render/indexCarruselPosts.js'
import { indexCardsPosts } from '../render/indexCardsPosts.js'

export async function eventIndex() {
  // Createing carrusel
  const carouselData = await getPosts(5)
  await indexCarruselPosts(carouselData)

  // Creating cards
  const cardsData = await getPosts(20)
  await indexCardsPosts(cardsData)
}
