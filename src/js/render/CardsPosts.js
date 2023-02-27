import { CardsPost } from './CardsPost.js'
export function CardsPosts(posts) {
  posts.forEach((post) => {
    CardsPost(post)
  })
}
