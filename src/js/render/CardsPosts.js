import { CardsPost } from './CardsPost.js'
export function CardsPosts(posts) {
  console.log('CardsPosts')
  posts.forEach((post) => {
    CardsPost(post)
  })
}
