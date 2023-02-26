import storage from '../storage/index.js'
import { profileUserInfo } from '../render/profileUserInfo.js'
import { usersListings } from '../api/profiles/usersListings.js'
import { usersBids } from '../api/profiles/userBids.js'
import { CardsPosts } from '../render/CardsPosts.js'

const yourListings = document.querySelector('#yourListings')
const yourBids = document.querySelector('#yourBids')

export async function eventProfile() {
  const user = storage.load('user')
  profileUserInfo(user)
  let result = await usersListings(user.name)
  CardsPosts(result)

  // event listeners
  yourListings.addEventListener('click', async () => {
    result = await usersListings(user.name)
    CardsPosts(result)
  })

  yourBids.addEventListener('click', async () => {
    result = await usersBids(user.name)
    CardsPosts(result)
  })
}
