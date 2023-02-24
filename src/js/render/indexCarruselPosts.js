import { indexCarruselPost } from './indexCarruselPost.js'

export function indexCarruselPosts(posts) {
  let i = 0
  posts.forEach((post) => {
    i++
    indexCarruselPost(post, i)
  })
}
