import { indexCarruselPost } from './indexCarruselPost.js'

export function indexCarruselPosts(posts) {
  // counts which post is being rendered
  let i = 0
  // render each post
  posts.forEach((post) => {
    i++
    indexCarruselPost(post, i)
  })
}
