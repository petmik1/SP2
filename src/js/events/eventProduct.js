import { getPost } from '../api/posts/getPost.js'
import { singlePost } from '../render/singlePost.js'
import { editPost } from '../api/posts/editPost.js'
export async function eventProduct() {
  const form = document.querySelector('#editPost')
  const querystring = window.location.search
  const params = new URLSearchParams(querystring)
  const id = params.get('id')
  const result = await getPost(id)
  singlePost(result)
  form.addEventListener('submit', async (event) => {
    event.preventDefault()
    console.log(form.title.value, form.description.value, form.image.value)
    await editPost(
      id,
      form.title.value,
      form.description.value,
      form.image.value
    )
    location.reload()
  })
}
