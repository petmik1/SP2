import storage from '../storage/index.js'
import { profileUserInfo } from '../render/profileUserInfo.js'
import { usersListings } from '../api/profiles/usersListings.js'
import { usersBids } from '../api/profiles/userBids.js'
import { CardsPosts } from '../render/CardsPosts.js'
import { createPost } from '../api/posts/createPost.js'
import { changeAvatar } from '../api/profiles/changeAvatar.js'

const yourListings = document.querySelector('#yourListings')
const yourBids = document.querySelector('#yourBids')
const createListingBtn = document.querySelector('#createListingBtn')
const createPostForm = document.querySelector('#createPost')
const cards = document.querySelector('.cards')
const cogwheel = document.querySelector('#cogwheel')
const formAvatar = document.querySelector('#changeAvatar')

const user = storage.load('user')
console.log(cards)

export async function eventProfile() {
  profileUserInfo(user)
  let result = await usersListings(user.name)
  CardsPosts(result)

  // event listeners
  cogwheel.addEventListener('click', () => {
    formAvatar.classList.toggle('d-flex')
  })
  formAvatar.addEventListener('submit', async (e) => {
    e.preventDefault()
    result = await changeAvatar(formAvatar.avatar.value, user.name)
    storage.save('user', result)
    location.reload()
  })

  createListingBtn.addEventListener('click', () => {
    createPostForm.classList.toggle('d-flex')
  })

  createPostForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    console.log(e.target.endsAt.value)
    result = await createPost(
      createPostForm.title.value,
      createPostForm.endsAt.value,
      createPostForm.description.value,
      createPostForm.image.value
    )
    console.log(result)
    location.reload()
  })

  yourListings.addEventListener('click', async () => {
    cards.innerHTML = ''
    result = await usersListings(user.name)
    CardsPosts(result)
  })

  yourBids.addEventListener('click', async () => {
    cards.innerHTML = ''
    result = await usersBids(user.name)
    console.log(result)
    CardsPosts(result)
  })
}
