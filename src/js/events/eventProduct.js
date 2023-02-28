import { getPost } from '../api/posts/getPost.js'
import { singlePost } from '../render/singlePost.js'
export async function eventProduct() {
  const deleteButton = document.querySelector('#deleteButton')
  const editButton = document.querySelector('#editButton')
  const querystring = window.location.search
  const params = new URLSearchParams(querystring)
  const id = params.get('id')
  const result = await getPost(id)
  singlePost(result)
  function eventListener() {
    deleteButton.addEventListener('click', () => {
      console.log('delete')
    })
    editButton.addEventListener('click', () => {
      console.log('edit')
    })
  }
}
