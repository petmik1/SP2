import { getPosts } from '../api/posts/getPosts.js'
import { indexCarruselPosts } from '../render/indexCarruselPosts.js'
export async function eventIndex() {
  // Createing carrusel
  const carouselData = await getPosts(5)
  await indexCarruselPosts(carouselData)

  // Creating cards
  const cardsData = await getPosts(20)
  console.log(cardsData)
}
