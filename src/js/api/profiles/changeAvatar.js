import { headers } from '../headers.js'
import { apiPath } from '../constants.js'
import storage from '../../storage/index.js'
export async function changeAvatar(image, name) {
  // creating object with image
  let avatar = { avatar: image }
  avatar = JSON.stringify(avatar)

  // sending data to api
  const response = await fetch(`${apiPath}profiles/${name}/media`, {
    method: 'put',
    body: avatar,
    headers: headers('application/json'),
  })

  if (response.ok) {
    // saving user to local storage and returning response
    storage.save('user', response)
    return await response.json()
  } else {
    throw new Error(response.statusText)
  }
}
