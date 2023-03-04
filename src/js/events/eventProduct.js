import { getPost } from '../api/posts/getPost.js'
import { singlePost } from '../render/singlePost.js'
import { editPost } from '../api/posts/editPost.js'
export async function eventProduct() {
  // getting elements
  const editForm = document.querySelector('#editPost')
  const querystring = window.location.search
  const params = new URLSearchParams(querystring)
  const id = params.get('id')

  // calling getPost function
  const result = await getPost(id)

  // rendering single post
  singlePost(result)

  // adding event listener
  editForm.addEventListener('submit', async (event) => {
    event.preventDefault()
    await editPost(
      id,
      editForm.title.value,
      editForm.description.value,
      editForm.image.value
    )
    location.reload()
  })
}
