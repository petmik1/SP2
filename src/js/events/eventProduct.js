import { getPost } from '../api/posts/getPost.js'
import { singlePost } from '../render/singlePost.js'
import { editPost } from '../api/posts/editPost.js'
export async function eventProduct() {
  const editForm = document.querySelector('#editPost')
  const bidForm = document.querySelector('#bidForm')
  const querystring = window.location.search
  const params = new URLSearchParams(querystring)
  const id = params.get('id')
  const result = await getPost(id)
  singlePost(result)
  editForm.addEventListener('submit', async (event) => {
    event.preventDefault()
    console.log(
      editForm.title.value,
      editForm.description.value,
      editForm.image.value
    )
    await editPost(
      id,
      editForm.title.value,
      editForm.description.value,
      editForm.image.value
    )
    location.reload()
  })
}
