import storage from '../storage/index.js'
import { profileUserInfo } from '../render/profileUserInfo.js'
import { usersListings } from '../api/profiles/usersListings.js'
import { usersBids } from '../api/profiles/userBids.js'
import { CardsPosts } from '../render/CardsPosts.js'
import { createPost } from '../api/posts/createPost.js'

const yourListings = document.querySelector('#yourListings')
const yourBids = document.querySelector('#yourBids')
const createListingBtn = document.querySelector('#createListingBtn')
const createPostForm = document.querySelector('#createPost')
const cards = document.querySelector('.cards')
console.log(cards)

export async function eventProfile() {
  const user = storage.load('user')
  profileUserInfo(user)
  let result = await usersListings(user.name)
  CardsPosts(result)

  // event listeners
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
    CardsPosts(result)
  })
}
