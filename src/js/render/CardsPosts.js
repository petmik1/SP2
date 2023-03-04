import { CardsPost } from './CardsPost.js'
export function CardsPosts(posts) {
  // render each post
  posts.forEach((post) => {
    CardsPost(post)
  })
}
