import { getPost } from '../api/posts/getPost.js'
import { singlePost } from '../render/singlePost.js'
export async function eventProduct() {
  const querystring = window.location.search
  const params = new URLSearchParams(querystring)
  const id = params.get('id')
  const result = await getPost(id)
  singlePost(result)
}
