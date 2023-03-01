export function createEditForm(post) {
  const form = document.querySelector('#editPost')

  if (form.style.display !== 'flex') {
    form.style.display = 'flex'
    form.classList.add('mx-auto', 'my-5')
    form.title.value = post.title
    form.description.value = post.description
    if (post.media.length < 0) {
      form.image.value = post.media[0]
    }
    return form
  } else {
    form.style.display = 'none'
    return form
  }
}
