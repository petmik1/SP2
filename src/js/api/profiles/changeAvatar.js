import { headers } from '../headers.js'
import { apiPath } from '../constants.js'
import storage from '../../storage/index.js'
export async function changeAvatar(image, name) {
  let avatar = { avatar: image }
  avatar = JSON.stringify(avatar)

  const response = await fetch(`${apiPath}profiles/${name}/media`, {
    method: 'put',
    body: avatar,
    headers: headers('application/json'),
  })
  if (response.ok) {
    storage.save('user', response)

    return await response.json()
  }
  throw new Error(response.statusText)
}
