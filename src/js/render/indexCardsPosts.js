import { indexCardsPost } from './indexCardsPost.js'
export function indexCardsPosts(posts) {
  posts.forEach((post) => {
    indexCardsPost(post)
  })
}
